import './Register.css'
// Import images
import Logo from '../../assets/bonumLogo.svg'
import Join from '../../assets/join.png'

const Register = () => {
  return (
    <main id='Register'>
      <section className="form-container">
        <article className='head'>
          <img src={Logo} alt="" />
          <p className="title">Registro</p>
        </article>
        <form className="form">
          <div className="input-group">
            <label >Nombre de usuario</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label >Correo</label>
            <input type="text" name="email" id="email" placeholder="" />
          </div>
          <div className="input-group">
            <label >Contraseña</label>
            <input type="password" name="password" id="password" placeholder="" />
          </div>
          <button className="sign">Registrarse</button>
        </form>
      </section>
      <section >
        <img className='join' src={Join} alt="" />
      </section>
    </main>
  );
}

export default Register;
