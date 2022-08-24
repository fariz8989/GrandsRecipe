import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './Register.css'
function Register() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const errMessage = useRef()
  const navigate = useNavigate()
  let handleSubmit = ()=>{
    const errContainer = errMessage.current
    if(username===""||password===""){
      errContainer.innerHTML = "Username or Password require"
    }else{
      axios.post("http://localhost:4000/users/register",{username,password}).then(res=>{
       navigate('/login')
      }).catch(err=>{
        const message = err.response.data.message
        errContainer.innerHTML = message
      })
    }
  }

  return (
    <>
      <div className="bg-gray-300 flex items-center login font-body h-screen">
        <div className="grid-register w-full rounded-md bg-gray-100 m-6 shadow-2xl overflow-hidden">
          <Link className="absolute font-bold mt-4 ml-6 text-4xl hover:text-gray-400 transition ease-out duration-300"to="/">{"<"}</Link>
          <div className="login-form">
            <h1 className="text-4xl my-2 font-bold">SIGN UP</h1>
          <div className="inputBox my-2">
              <input onChange={(value)=>setUsername(value.target.value)}className="focus:ring-0 focus:border-black"type="text"required="required" name="username"/>
              <span>Username</span>
          </div>
          <div className="inputBox my-2">
              <input onChange={(value)=>setPassword(value.target.value)}className="focus:ring-0 focus:border-black"type="text"required="required" name="password"/>
              <span>Password</span>
          </div>
          <h4 ref={errMessage}></h4>
          <button onClick={()=>handleSubmit()}className="buttonLogin">Sign Up</button>
          <Link className="text-gray-400 my-4 hover:text-black transition duration-300 ease-out text-sm underline"to="/login">Login</Link>
          </div>
          
          <div className="">
          </div>
          
          
        </div>
      </div>
    </>
  );
}
export default Register;
