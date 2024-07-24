import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/styles.css"
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you would typically send the signup request to your backend
    console.log('Signup successful');
    navigate('/login');
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
