import React from "react";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import Navbar from '../components/Navbar/Navbar'
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Detail from "../components/FoodDetail/Detail";
import Form from "../components/Form/Form";
import { Provider } from "react-redux";
import store from "../redux"
import Error from "../components/ErrorPage/Error";
import About from "../components/About/About";
function HomePage(){
    
    return(<>
    <Provider store={store}>
       
    <Navbar/>
    <Home/>
    </Provider>
   
    
    </>)
}
function Result(){
    return(<>
    <div className="">
    <Provider store={store}>
    <Navbar/>
    <CardDisplay/>
    </Provider>
    </div>
    </>)
}
function PostPage(){
    return(<>
    <Provider store={store}>
    <Navbar/>
    <Form/>
    </Provider>
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
    <Provider store={store}>
    <Navbar/>
    <Detail/>
    </Provider>
    </>)
}
function ErrorPage(){
    return(<>
    <Error/>
    </>)
}
function AboutPage(){
    return(<>
    <Provider store={store}>
     <Navbar/>
    <About/> 
    </Provider>
    </>)
   
}
export {Result,HomePage,LoginPage,RegisterPage,DetailPage,PostPage,ErrorPage,AboutPage};