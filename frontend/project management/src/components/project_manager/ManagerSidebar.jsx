import React from 'react';
import './ManagerSidebar.css';
import ManagerNavbar from './ManagerNavbar';

const ManagerSidebar = () => {
  return (
    <>
    <ManagerNavbar/>
    <aside className="manager-sidebar">
      <ul>
        <li className="active">Dashboard</li>
        <li>My Projects</li>
        <li>Team Members</li>
        <li>Task Management</li>
        <li>Messages</li>
        <li>Reports & Analytics</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </aside>
    </>
  );
};

export default ManagerSidebar;