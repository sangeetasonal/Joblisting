import { useEffect, useState } from 'react';
import { login } from '../services';
import {  useNavigate } from 'react-router-dom';

function LoginForm() {
   
useEffect (() => {
  const token = localStorage.getItem('token')
  if (token) {
    navigate('/home')
  } 
} ,[])
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(formData);
    if (res.status === 200) {
      const data = await res.json()
        localStorage.setItem('token', data.token);
      alert('Logged in successfully');
      navigate('/home')
    } else {
      console.log(res);
      alert('Failed to log in');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
