import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import {HomePage,Result,LoginPage,RegisterPage,DetailPage} from '../controller/PageController'
function Test(){
  const {id}=useParams()
  useEffect(()=>{
    console.log(id)
  })
  return(<>
  <div>{id}</div></>)
}
function Router(){
    return(<>
     <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='/result' element={<Result/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </>)
}
export default Router;