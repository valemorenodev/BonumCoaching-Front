//Import Routes
import { Link } from 'react-router-dom'
// Import style file
import './Login.css'
// Import images
import Logo from '../../assets/bonumLogo.svg'
import Call from '../../assets/call.png'

const Login = () => {

  return (
    <main id='Login'>
      <section className="form-container">
        <article className='head'>
          <img src={Logo} alt="" />
          <p className="title">Iniciar seción</p>
        </article>
        <form className="form">
          <div className="input-group">
            <label >Nombre de usuario</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label >Contraseña</label>
            <input type="password" name="password" id="password" placeholder="" />
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
