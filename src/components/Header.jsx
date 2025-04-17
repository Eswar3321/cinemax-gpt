import {useEffect} from 'react';
import { PROFILE_ICON } from '../utils/constants';
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from '../utils/constants';
import {changeLanguage} from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
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

  const handleGptSearch = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-full bg-gradient-to-b from-black to-transparent z-9">
      <div className="flex justify-between items-center px-4 md:pl-8 md:pr-12">
        <img className="w-32 md:w-44" src="/cinemaxlogo.png" alt="background image"/>
        {user && <div className="flex gap-2 items-center">
        {showGptSearch && <select className="cursor-pointer" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(each => <option value={each.identifier} key={each.identifier} className="text-black">{each.name}</option>)}
        </select>}
          <img src={PROFILE_ICON} className="w-6 md:w-10 h-6 md:h-10" alt="profile icon" />
          <span className="text-white font-bold">Hi, {user.displayName}</span>
          <button onClick={handleGptSearch}className="font-bold cursor-pointer bg-purple-800 !px-2 !py-1 m-0 outline-none">{showGptSearch ? "Home" : "GPT Search"}</button>
          <button onClick={handleSignOut} className="font-bold cursor-pointer bg-transparent text-white border border-white hover:border-blue-500 !px-2 !py-1 m-0 outline-none">Sign Out</button>
        </div>}
      </div>
    </div>
  )
}

export default Header
