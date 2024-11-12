import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { username, email, password };
      const storedDetails = JSON.parse(localStorage.getItem('userform')) || [];
  
      if (storedDetails.some(user => user.username === username)) {
        alert("User Already Exists. Please Choose A Different One");
        return;
      }
  
      storedDetails.push(newUser);
      localStorage.setItem('userform', JSON.stringify(storedDetails));
      alert("User Registered Successfully!");
      navigate('/login');
    };
  
    return (
        <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
            type='text'
          /><br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            type='email'
          /><br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            type='password'
          /><br />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }
