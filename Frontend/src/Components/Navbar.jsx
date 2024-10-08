import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from "../assets/logo 2.png";
import { FiUsers, FiGift, FiMenu, FiX, FiCalendar } from 'react-icons/fi';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import man from '../assets/man.png'
const Navbar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [casesDropdownOpen, setCasesDropdownOpen] = useState(false);
  const url = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get(`${url}/api/user/logout`, {
        withCredentials: true,
      });
      navigate('/logout');
      navigate(0);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const navigateToContact = () => {
    navigate('/user');
  };

  const navigateToClient = () => {
    navigate('/client');
  };

  const navigateToAppointments = () => {
    navigate('/appointments');
  };

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const toggleCasesDropdown = () => {
    setCasesDropdownOpen(!casesDropdownOpen);
  };

  return (
    <div className="pt- p- ">
      {/* Fixed Sidebar */}
      <div className={`fixed outline outline-white top-1 bottom-1 rounded-r-2xl inset-y-0 left-0 bg-[rgb(0,6,36)] bg-gradient-to-r from-[rgba(0,6,36,1)] to-[rgba(14,119,212,0.89)] to-75%" z-40 p-4 bg-opacity-90 transition-all duration-300 transform ${sidebarExpanded ? 'translate-x-0 w-60' : 'translate-x-[0%] w-32'}`}>
        <div className="flex flex-col items-center">
          <button
            className="btn btn-ghost self-center mb-4"
            onClick={toggleSidebar}
          >
            {sidebarExpanded ? <FiX className="h-6 w-6 text-white" /> : <FiMenu className="h-6 w-6 text-white" />}
          </button>
          <div className={`flex justify-center w-full mb-6 transition-opacity duration-300 ${sidebarExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-24 w-36  shadow-md rounded-2xl shadow-white" />
            </Link>
          </div>
          <div className="h-20 w-20 rounded-full outline outline-white  shadow-lg shadow-white mb-4">
            <img
              alt="User Avatar"
              src={man}
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div className={`flex flex-col items-center ${sidebarExpanded ? 'w-full' : 'w-0'} transition-all duration-300 overflow-hidden`}>
            <Link to="/profile" className="hover:bg-white hover:text-black rounded-2xl py-2 w-full text-center">
              Profile
            </Link>
            <button className="hover:bg-white hover:text-black rounded-2xl py-2 w-full text-center" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <ul className='pt-10 space-y-4 flex flex-col items-center'>
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-white py-3 cursor-pointer" onClick={() => { navigate('/home'); toggleSidebar(); }}>
            <svg className="h-6 w-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 20V14H6V20H3V10H0L10 0L20 10H17V20H14V14H10Z" />
            </svg>
            {sidebarExpanded && <span className='text-white'>Dashboard</span>}
          </li>
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-white py-3 cursor-pointer" onClick={() => { navigateToAppointments(); toggleSidebar(); }}>
            <FiCalendar className="h-6 w-6 mr-2 text-white" />
            {sidebarExpanded && <span className='text-white'>Appointment</span>}
          </li>
          <li className="flex flex-col items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-white py-3 cursor-pointer" onClick={() => { navigate('/client'); toggleSidebar(); }}>
            <div className="flex items-center" onClick={toggleCasesDropdown}>
              <FaFolder className="h-6 w-6 mr-2  text-white" />
              {sidebarExpanded && <span className='text-white'>Client</span>}
              {/* {sidebarExpanded && <FaFolderOpen className={`ml-auto ${casesDropdownOpen ? '' : 'hidden'}`} />} */}
            </div>
            {/* {casesDropdownOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li className="flex items-center hover:bg-yellow-500 hover:text-black rounded-box py-2 w-full cursor-pointer" onClick={() => { navigate('/cases'); toggleSidebar(); }}>
                  <FaFolder className="h-5 w-5 mr-2 text-yellow-500" />
                  {sidebarExpanded && <span>Cases</span>}
                </li>
                <li className="flex items-center hover:bg-yellow-500 hover:text-black rounded-box py-2 w-full cursor-pointer" onClick={() => { navigate('/case-details'); toggleSidebar(); }}>
                  <FaFolderOpen className="h-5 w-5 mr-2 text-yellow-500" />
                  {sidebarExpanded && <span>Case Details</span>}
                </li>
              </ul>
            )} */}
          </li>
          {/* <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-yellow-500 py-3 cursor-pointer " onClick={() => { navigateToMembership(); toggleSidebar(); }}>
            <FiGift className="h-6 w-6 mr-2 text-yellow-500" />
            {sidebarExpanded && <span>Membership</span>}
          </li> */}
          <li className="flex items-center pl-2 rounded-xl hover:shadow-lg hover:shadow-white py-3 cursor-pointer " onClick={() => { navigateToContact(); toggleSidebar(); }}>
            <FiUsers className="h-6 w-6 mr-2 text-white" />
            {sidebarExpanded && <span className='text-white'>Users</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;