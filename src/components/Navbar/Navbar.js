import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getStatus } from "../../redux/action/action";
import logo from "./images/images";
import {connect} from 'react-redux'
function Navbar(props) {
  const[currentUser,setUser]=useState({username:"",isLoggedIn:""})
  useEffect(()=>{
    const status = props.data.status;
    if(status === false){
      const token = sessionStorage.getItem('token');
      axios.get("https://grandsbackend.herokuapp.com/users/login",{
        headers: { authorization: token },
      }).then(res=>{
        
        props.setStatus({username:res.data?.username,isLoggedIn:res.data?.isLoggedIn})
      })
    }else{
      console.log(status)
    }
    
  },[])
  const toggle = useRef();
  const navigate = useNavigate();
  const[keyword,setKeyword]=useState('')
  function dropDown() {
    const item = toggle.current;
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  }
  const search = async (keyword)=>{
    const recipe = await (await axios.get("https://grandsbackend.herokuapp.com/post")).data.data
    console.log(recipe)
    const dataResult = []
    recipe.forEach(data=>{
      console.log(keyword)
      const isIncludes =  data.tags.includes(keyword) || data.title.toLowerCase().includes(keyword)
      if(isIncludes){
        dataResult.push(data)
      }
    })
    return dataResult
  }

   async function handleSubmit(){
    if(!keyword){
      alert("Please Fill Keyword Field")
    }else{
      const result = await search(keyword);
      navigate('/result',{state:{result:result,keyword:keyword}});
    }
   
  }
  return (
    <>
      {/*NAVBAR*/}
      <div className="">
        <nav className="h-full bg-gray-100 p-4 shadow-lg -z-10">
          <div className="flex justify-between md:justify-center items-center">
            <div className="flex items-center gap-2">
            <img className=" w-12 md:w-16" src={logo}/>
            <h1 className="uppercase text-xl md:text-3xl font-bold text-gray-600">
              Grand's Recipes
            </h1>
            </div>
            
            <div>
              <svg
                onClick={() => {
                  dropDown();
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                id="menu"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>

          <ul
            ref={toggle}
            className=" hidden md:flex md:justify-start md:items-center md:mt-0 md:block mt-4 border-t-2 py-2 md:border-none md:col-span-3"
          >
            <form className="w-full mb-2 md:mb-0 md:w-96 mr-8">
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(event)=>setKeyword(event.target.value)}
                  id="default-search"
                  className="block  p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Search Recipe, Dishes..."
                  required
                />
                <button
                  onClick={(e)=>{
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className="text-white absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
            <Link to="/">
              <li className="py-1 font-medium hover:text-gray-400 transition duration-400 ease-in md:mx-8 md:text-md">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="py-1 font-medium hover:text-gray-400 transition duration-400 ease-in md:mx-8 md:text-md">
                About Us
              </li>
            </Link>
            <Link onClick={props.data?.status ? ()=> {sessionStorage.removeItem('token');window.location.reload()}:""}to={props.data?.status ? "":"/signup"}>
              <li className="py-1 font-medium hover:text-gray-400 transition duration-400 ease-in md:mx-8 md:text-md">
                {props.data?.status ? "Logout":"Sign Up"}
              </li>
            </Link>
            <Link to={props.data?.status ? "/profile":"/login"}>
              <li className="py-1 font-medium hover:text-gray-400 transition duration-400 ease-in md:mx-8 md:text-md">
              {props.data?.status ? props.data.username.toUpperCase():"Login"}
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
const mapStateToProps = state =>({
  data:state.userReducer
})
const mapDispatchToProps = dispatch =>({
  setStatus: (value) => {
      return dispatch(getStatus(value));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
