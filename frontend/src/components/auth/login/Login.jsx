// Login.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt'; // Import VanillaTilt library
import './Login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Initialize VanillaTilt on component mount
    const tiltElement = document.querySelector('.box');
    VanillaTilt.init(tiltElement, {
      max: 7,
      speed: 50,
      glare: true,
    });

    // Clean up VanillaTilt on component unmount
    return () => tiltElement.vanillaTilt.destroy();
  }, []); // Empty array ensures this effect runs only on component mount

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Assuming the API response structure is { token, user }
      localStorage.setItem('token', data.token);
      // Optionally, you can store user data in localStorage or state for use across the app
      console.log(data);
       window.location.href= '/'
      // Redirect or navigate to another page upon successful login
      // Example: history.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, show error message to user, etc.
    }
  };

  return (
    <div className="box">
      <div className="elements untoldcoding"></div>
      <div className="elements name">
        <h2>Login Page</h2>
      </div>
      <div className="elements content">
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
       
      </div>
      <div className="card">
         <div className="links">
          <ul>
            <li><div className="register"><Link to="/register">Register</Link></div></li>
            <li><div className="forgetpwd"><Link to="/forgot-password">Forgot Password?</Link></div></li>
          </ul>
        
          
      </div>

     </div>
    </div>
  );
};

export default Login;
