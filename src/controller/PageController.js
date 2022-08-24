import React from "react";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
function HomePage(){
    return(<>
    <Navbar/>
    <Home/>
    
    </>)
}
function Result(){
    return(<>
    <div className="">
    <Navbar/>
    <CardDisplay/>
    </div>
   
    </>)
}
function LoginPage(){
    return(<>

    <Login/>
    </>)
}
function RegisterPage(){
    return(<>
    <Register/>    
    </>)
}
export {Result,HomePage,LoginPage,RegisterPage}