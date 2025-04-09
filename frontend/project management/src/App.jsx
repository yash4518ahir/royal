import { useEffect, useState } from 'react'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import  UserSidebar  from './components/layout/UserSidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from './components/user/UserProfile'
import { AdminSidebar } from './components/admin/AdminSidebar'
import { AdminProject } from './components/admin/AdminProject'
import Home from './components/home/Home'
import axios from 'axios'
import PrivateRoutes from './hooks/PrivateRoutes'
import ManagerSidebar from './components/project_manager/ManagerSidebar'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'


function App() {
  
  axios.defaults.baseURL = "http://localhost:3000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  

  return (
   
    <div
    className={
      location.pathname === "/login" || location.pathname === "/signup"
        ? ""
        : "app-wrapper"
    }
  >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      <Route path="" element={<PrivateRoutes/>}>
      <Route path="/user" element = {<UserSidebar></UserSidebar>}>
        <Route path="profile" element= {<UserProfile/>}></Route>
      </Route>
      <Route path="/manager" element={<ManagerSidebar/>}></Route>
      <Route path='/admin' element={<AdminSidebar/>}>
        <Route path="project" element={<AdminProject/>}></Route>
      </Route>
      </Route>
      </Routes>
      </div>
    
  
  )
}

export default App
