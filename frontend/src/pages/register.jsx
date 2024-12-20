import { useState } from 'react';
import { register } from '../services';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(formData);
    if (res.status === 200) {
      alert('Registered successfully');
    } else {
      console.log(res);
      alert('Failed to register');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <input
        type="text"
        name="mobile"
        placeholder="Enter phone"
        value={formData.mobile}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
