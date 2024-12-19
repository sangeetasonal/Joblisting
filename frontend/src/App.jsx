import { register, login } from './services/index'
import './App.css'
import { useState } from 'react'
  
function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  })
  const [loginformData,setLoginformData] = useState({
    email: '',
    password: '',
  })
  const handleregister = async (e) => {
    e.preventDefault()
   const res = await register(formData)
    if (res.status ===200) {
      alert('registered successfully')
  }
  else {
    console.log(res)
     alert('Failed to register')
  
  }
}

const handlelogin = async (e) => {
  e.preventDefault()
  const res = await login(formData)
  if (res.status ===200) {
    alert('Logged in successfully')
  }
  else {
    console.log(res)
     alert('Failed to login')
  
  }
}
  return (
    <>
     <form onSubmit={handleregister}>
      <input type="text" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} 
      value={formData.name} name='name' placeholder='enter your name' />
      <input type="text" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})}  
      value={formData.mobile} name='mobile' placeholder='enter phone' />
      <input type="text" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})} 
       value={formData.email} name='email' placeholder='enter email' />
      <input type="password" onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value})}
        value={formData.password} name='password' placeholder='enter password' />
      <button type='submit'>submit</button>


     </form>

     <form onSubmit={handlelogin}>
      <input type="email"  onChange={(e) => setLoginformData({ ...loginformData, [e.target.name]: e.target.value})} 
       value={loginformData.email} name='email' placeholder='enter email' />
      <input type="password"  onChange={(e) => setLoginformData({ ...loginformData, [e.target.name]: e.target.value})} 
       value={loginformData.password} name='password' placeholder='enter password' />
      <button type='submit'>login</button>
     </form>
    </>
  )
}

export default App
