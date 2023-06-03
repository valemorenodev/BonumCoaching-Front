
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login.jsx'
import Register from '../components/Register/Register.jsx'

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Register' element={<Register />} />
    </Routes>
  );
}

export default RouterApp;
