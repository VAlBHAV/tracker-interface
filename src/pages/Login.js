import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USER_CREDENTIALS = { username: "admin", password: "password123" };

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
