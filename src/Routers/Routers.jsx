import React from 'react';
import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import PostsManagement from "../Pages/PostsManagement";
import Settings from "../Pages/Settings";
import Subcription from "../Components/Subcription/Subcription";
import Revenue from "../Components/Revenue/Revenue";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard'/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='subcription' element={<Subcription/>}/>
          <Route path='revenue' element={<Revenue/>}/>
        </Route>
        <Route path='/postsManagement' element={<PostsManagement/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes> 
    </>
  )
}

export default Routers