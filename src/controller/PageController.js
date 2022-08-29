import React from "react";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Detail from "../components/FoodDetail/Detail";
import Form from "../components/Form/Form";
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
function PostPage(){
    return(<>
    <Navbar/>
    <Form/>
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
function DetailPage(){
    return(<>
    <Navbar/>
    <Detail/>
    </>)
}
export {Result,HomePage,LoginPage,RegisterPage,DetailPage,PostPage}