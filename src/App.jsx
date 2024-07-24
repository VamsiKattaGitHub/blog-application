import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Components/Navbar.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home.jsx';
import Bollywood from './Components/Bollywood.jsx';
import Hollywood from './Components/Hollywood.jsx';
import Technology from './Components/Technology.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import Profile from './Components/Profile.jsx';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Navbar auth={auth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/profile" element={auth ? <Profile setAuth={setAuth} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
