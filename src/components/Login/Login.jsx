//Import Routes
import { Link, useNavigate } from 'react-router-dom'
// Import style file
import './Login.css'
// Import images
import Logo from '../../assets/bonumLogo.svg'
import Call from '../../assets/call.png'
import { useState } from 'react'
import axios from "axios";

const loginInit = {
  'email': '',
  'password': ''
}

const Login = () => {

  const [loginData, setLoginData] = useState(loginInit);
  const navigate = useNavigate();
  const onchange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:3030/api/login', {

        email: loginData.email,
        password: loginData.password

      });

      console.log(loginData.email, loginData.password)
      const token = response.data.tokenSession;
      localStorage.setItem('token', token);
      alert('Bienvenido!')
      navigate('/CoachPanel');
    } catch (error) {
      alert('Por favor revisa tu contraseña y/o correo');
    }
  }
  return (
    <main id='Login'>
      <section className="form-container">
        <article className='head'>
          <img src={Logo} alt="" />
          <p className="title">Iniciar seción</p>
        </article>
        <form className="form" onSubmit={submitHandler}>
          <div className="input-group">
            <label >Correo electronico</label>
            <input type="text" name="email" id="email" placeholder="" onChange={onchange} value={loginData.email} />
          </div>
          <div className="input-group">
            <label >Contraseña</label>
            <input type="password" name="password" id="password" placeholder="" onChange={onchange} value={loginData.password} />
          </div>
          <button className="sign">Ingresar</button>
        </form>
        <div className="sing-up-menssage">
          <div className="line"></div>
          <p className="message">¿No tienes cuenta?</p>
          <div className="line"></div>
        </div>
        <p className="signup">
          <Link to={'/Register'} >Registrarse</Link>
        </p>
      </section>
      <section >
        <img className='call' src={Call} alt="" />
      </section>
    </main>
  );
}

export default Login;
