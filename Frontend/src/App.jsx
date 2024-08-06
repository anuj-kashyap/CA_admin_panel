import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import Appointment from './Components/Appointment';
import Client from './Components/Client';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          {/* Redirect from "/" to "/login" */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/logout' element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/client' element={<Client/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
