import React, { useState } from "react";
import { Bell, Home, Users, Briefcase, Mail, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side - Logo & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-indigo-600">MySocial</h1>
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center - Navigation Links */}
        <div className={`lg:flex space-x-6 ${isMobileMenuOpen ? "block" : "hidden"} absolute lg:static top-16 left-0 bg-white w-full lg:w-auto shadow-md lg:shadow-none p-4 lg:p-0`}>
          <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Users size={20} />
            <span>Network</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Briefcase size={20} />
            <span>Jobs</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Mail size={20} />
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
            <Bell size={20} />
            <span>Notifications</span>
          </a>
        </div>

        {/* Right Side - Profile & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border">
              <img
                src="https://via.placeholder.com/150" // Profile Image
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
