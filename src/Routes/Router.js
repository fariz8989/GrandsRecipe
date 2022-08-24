import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage,Result,LoginPage,RegisterPage} from '../controller/PageController'
function Router(){
    return(<>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/result' element={<Result/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </>)
}
export default Router;