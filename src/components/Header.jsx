import {useEffect} from 'react'
import { PROFILE_ICON } from '../utils/constants'
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate('/home')
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {});
  }

  return (
    <div className="flex absolute justify-between items-center bg-gradient-to-b from-black to-transparent z-9 w-screen pr-4 md:px-12">
      <img className=" w-32 md:w-44" src="/cinemaxlogo.png" alt="background image"/>
      {user && <div className="flex gap-2 items-center">
        <img src={PROFILE_ICON} className="w-6 md:w-10 h-6 md:h-10" alt="PROFILE_ICON" />
        <span className="text-white font-bold">Hi, {user.displayName}</span>
        <button onClick={handleSignOut} className="font-bold cursor-pointer bg-transparent text-white border border-white hover:border-blue-500 !px-2 !py-1 m-0 outline-none">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
