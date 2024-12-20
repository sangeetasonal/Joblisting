import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login'
import Register from './pages/register'
import './App.css';
import Home from './pages/home'
import NewJob from './pages/newjob';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newjob" element={<NewJob />} />
        <Route path="/editJob/:id" element={<NewJob />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
