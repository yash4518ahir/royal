import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../assets/usernavbar.css";

const UserNavbar = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="user-navbar">
      <div className="logo-user">Project Management</div>

      <div className="nav-icons-user">
        {/* 🔔 Notification Dropdown */}
        <div className="icon-wrapper" ref={notifRef}>
          <FaBell
            className="icon-user"
            onClick={() => setIsNotifOpen((prev) => !prev)}
          />
          {isNotifOpen && (
            <div className="dropdown-menu show">
              <p onClick={() => alert("No new notifications 📢")}>🔔 Check Notifications</p>
            </div>
          )}
        </div>

        {/* 👤 Profile Dropdown */}
        <div className="icon-wrapper" ref={profileRef}>
          <FaUserCircle
            className="icon-user profile-icon-user"
            onClick={() => setIsProfileOpen((prev) => !prev)}
          />
          {isProfileOpen && (
            <div className="dropdown-menu show">
              <p onClick={() => navigate("/user/profile")}>👤 View Profile</p>
              <p onClick={() => alert("Logging Out...")}>🚪 Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
