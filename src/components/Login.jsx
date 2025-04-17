import Header from "./Header"
import { useState, useRef } from "react";
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {BACKGROUND_IMAGE} from '../utils/constants'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
        // Validate the form
    const name = !isSignIn ?  fullName.current.value : null;
    const message = checkValidData(email.current.value, password.current.value, name);
    setErrMsg(message);
    if(!isSignIn) {
      // Sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          }).catch((error) => {
            setErrMsg(error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage.includes('Error')? "Please enter Valid details" : "");
        });
    }
  }
  
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg('');
  }

  return (
   <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10 bg-cover bg-center">
        <img src={BACKGROUND_IMAGE} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>    
      <div className="relative z-1 text-white flex flex-col items-center h-full">
      <Header />
      <div className="flex items-center flex-1">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black/60 p-8 md:p-10 w-80 md:w-100 mx-auto">
        <p className="text-yellow-400 text-sm mb-2">
          ⚠️ This is a demo project for practice purposes. Do not enter real credentials.
        </p>
          <h3 className="text-3xl mb-6 font-bold">{ isSignIn ? "Sign In": "Sign Up"}</h3>
          {!isSignIn && <input ref={fullName} type="text" placeholder="Full Name" className="p-2 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          }
          <input ref={email} type="text" placeholder="Email Address" autoComplete="user-name" className="p-2 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <input ref={password} type="password" autoComplete="current-password" placeholder="Password" className="p-2 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <p className="text-red-500 mt-4">{errMessage}</p>
          <button  onClick={handleButtonClick} className="p-2 mt-4  !bg-red-500 text-white inline-block w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className="mt-8 cursor-pointer" onClick={toggleForm}>{isSignIn ? "New to Cinemax? Sign up now." : "Already Registered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login;
