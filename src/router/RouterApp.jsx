
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login.jsx'
import Register from '../components/Register/Register.jsx'
import CoachPanel from '../components/CoachPanel/CoachPanel.jsx'

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/CoachPanel' element={<CoachPanel />} />
    </Routes>
  );
}

export default RouterApp;
