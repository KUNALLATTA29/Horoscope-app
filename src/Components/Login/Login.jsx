import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './Login.css'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const storedDetails = JSON.parse(localStorage.getItem('userform')) || [];
      const user = storedDetails.find(user => user.username === username && user.password === password);
  
      if (user) {
        alert("LogIn Successfully");
        navigate('/home');
      } else {
        alert("Invalid Username OR Password");
      }
    };
  
    return (
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
            type='text'
          /><br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            type='password'
          /><br />
          <button type='submit'>Log In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    );
  }
