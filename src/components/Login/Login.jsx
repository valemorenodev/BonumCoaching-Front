import './Login.css'

const Login = () => {

  return (
    <main id='Login'>
      <form className="form-container">
        <p className="title">Iniciar seción</p>
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
          <a rel="noopener noreferrer" href="#" className="">Registrarse</a>
        </p>
      </form>
    </main>
  );
}

export default Login;
