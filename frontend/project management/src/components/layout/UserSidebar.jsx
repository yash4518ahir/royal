import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import "../../assets/usersidebar.css"
import UserNavbar from './UserNavbar';

const UserSidebar = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <h2>Dashboard Content</h2>;
      case "Profile":
        return <h2>Profile Page</h2>;
      case "Projects":
        return <h2>Projects List</h2>;
      case "Task Management":
        return <h2>Task Management System</h2>;
      case "Messages":
        return <h2>Messages Inbox</h2>;
      case "Reports & Analytics":
        return <h2>Reports & Analytics</h2>;
      case "Settings":
        return <h2>Settings Page</h2>;
      case "Logout":
        return <h2>Logging Out...</h2>;
      default:
        return <h2>Welcome!</h2>;
    }
  };

  return (
    <>
      <UserNavbar />
      <aside className="user-sidebar">
        <div className="sidebar-menu">
          {[
            "Dashboard",
            "Profile",
            "Projects",
            "Task Management",
            "Messages",
            "Reports & Analytics",
            "Settings",
            "Logout"
          ].map((item) => (
            <div 
              key={item} 
              className={`sidebar-item ${activeSection === item ? "active" : ""}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
      <main className="app-main">
        {renderContent()}
      </main>
    </>
  );
};

export default UserSidebar;
