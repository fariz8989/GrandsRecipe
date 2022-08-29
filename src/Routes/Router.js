import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import {HomePage,Result,LoginPage,RegisterPage,DetailPage,PostPage} from '../controller/PageController'

function Router(){
    return(<>
     <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<HomePage/>} />
          <Route path='/result' element={<Result/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path="/detail/:id" element={<DetailPage/>}/>
          <Route path="/post" element={<PostPage/>}/>
        </Routes>
      </BrowserRouter>
    </>)
}
export default Router;