import React from 'react'
import { profileIcon } from '../utils/constants'
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut} from "firebase/auth";
import { useSelector } from 'react-redux';

const Header = ({isSignIn}) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      navigate('./error');
    });
  }

  return (
    <div className="flex justify-between items-center pr-3 md:pr-6 bg-gradient-to-b from-black to-transparent z-9 w-screen">
      <img className=" w-32 md:w-44" src="\public\cinemaxlogo.png" alt="background image"/>
      {!isSignIn && <div className="flex gap-2 items-center">
        <img src={profileIcon} className="w-6 md:w-10 h-6 md:h-10" alt="profileIcon" />
        <span className="text-white font-bold">Hi, {user.displayName}</span>
        <button onClick={handleSignOut} className="font-bold cursor-pointer bg-transparent text-white border border-white hover:border-blue-500 !px-2 !py-1 m-0 outline-none">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
