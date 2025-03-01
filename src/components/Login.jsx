import Header from "./Header"
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  const toggeleForm = () => {
    setIsSignIn(!isSignIn);
  }

  return (
   <div class="relative h-screen w-screen">
    <div class="absolute inset-0 bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg')] before:content-[''] before:absolute before:inset-0 before:bg-black/50"></div>
    <div class="relative z-1 text-white flex flex-col items-center h-full">
    <Header/>
      <div className="">
        <form action="" className="bg-black/60 p-8 md:p-20 w-70 md:w-120 mx-auto">
          <h3 className="text-3xl mb-6 font-bold">{ isSignIn ? "Sign In": "Sign Up"}</h3>
          {!isSignIn && <input type="text" placeholder="Full Name" className="p-4 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          }
          <input type="text" placeholder="Email Address" className="p-4 mb-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <input type="text" placeholder="Password" className="p-4 bg-[#1d2635] border border-gray-500 rounded w-full"/>
          <button className="p-4 mt-4 !bg-red-500 text-white inliine-block w-full">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className="mt-8 cursor-pointer" onClick={toggeleForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now."}</p>
        </form>
      </div>    
    </div>
  </div>
  )
}

export default Login
