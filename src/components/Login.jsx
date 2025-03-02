import Header from "./Header"
import { useState, useRef } from "react";
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMsg] = useState("");
  const navigate = useNavigate();
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
          console.log(user);
          updateProfile(user, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate('/home');
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
          navigate('/home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorMessage.includes('Error')? "Please enter Valid details" : "");
        });
    }
  }
  
  const toggeleForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg('');
  }

  return (
   <div className="relative h-screen w-screen">
    <div className="absolute inset-0 bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50"></div>
    <div className="relative z-1 text-white flex flex-col items-center h-full">
    <Header/>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="bg-black/60 p-8 md:p-20 w-80 md:w-120 mx-auto">
          <h3 className="text-3xl mb-6 font-bold">{ isSignIn ? "Sign In": "Sign Up"}</h3>
          {!isSignIn && <input ref={fullName} type="text" placeholder="Full Name" className="p-4 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          }
          <input ref={email} type="text" placeholder="Email Address" autoComplete="user-name" className="p-4 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <input ref={password} type="password" autoComplete="current-password" placeholder="Password" className="p-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <p className="text-red-500 mt-4">{errMessage}</p>
          <button  onClick={handleButtonClick} className="p-4 mt-4  !bg-red-500 text-white inliine-block w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className="mt-8 cursor-pointer" onClick={toggeleForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now."}</p>
        </form>
      </div>    
    </div>
  </div>
  )
}

export default Login
