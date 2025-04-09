import React from 'react';
import './ManagerNavbar.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const ManagerNavbar = () => {
  return (
    <nav className="manager-navbar">
      <div className="logo">Project Management</div>
      <div className="nav-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon profile-icon" />
      </div>
    </nav>
  );
};

export default ManagerNavbar;