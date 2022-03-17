// import { changeView } from '../routers/router.js';
// se importa funciones de firebase y de notificacion
import { signupGoogleEvent } from '../controllers/signup.controller.js';
import { loginBtnEvent } from '../controllers/login.controller.js';

// se crea template de login
export default () => {
  const viewLogin = `
  <section class="bg-cont">
      <form class="log-sig">
          <section class="log-sig-logobemusic">
              <h1 class="log-sig-title">BeMusic</h1>
              <img src="./assets/images/logobemusic.png">
          </section>
          <section class="log-sig-container">
              <section class="log-sig-inputs">
                  <input id="email" type="email" value="" placeholder="Correo"/>
                  <input id="pass" type="password" value="" placeholder="Contraseña"/>
              </section>
              <button type="button" id="login-btn" class="log-sig-btn">Iniciar sesión</button>
              <p>---- O ----</p>
              <section class="log-sig-google">
                  <p>Iniciar sesión con</p>
                  <img id="login-google" src="./assets/images/logogoogle.png"></img>
              </section>
              <section class = "log-sig-load">
                  <p>¿No tienes cuenta?</p>
                  <button type="button" id="signup-btn-load" class="log-sig-btn-2">Regístrate</button>
              </section>
          </section>
      </form>
  </section>`;
  const divElementLogin = document.createElement('div');
  divElementLogin.innerHTML = viewLogin;
  // se agrega evento click a boton continuar para inisiar sesion
  const loginBtn = divElementLogin.querySelector('#login-btn');
  loginBtn.addEventListener('click', () => {
    const loginEmail = divElementLogin.querySelector('#email').value;
    const loginPassword = divElementLogin.querySelector('#pass').value;
    loginBtnEvent(loginEmail, loginPassword);
  });
  // se agrega evento click a imagen para autenticar usuario con google
  const authGoogle = divElementLogin.querySelector('#login-google');
  authGoogle.addEventListener('click', () => {
    signupGoogleEvent();
  });
  // se agrega evento click a boton de signup
  const btnRegistrar = divElementLogin.querySelector('#signup-btn-load');
  btnRegistrar.addEventListener('click', () => {
    // event.preventDefault(); // changeView('#/signup');
    window.location.hash = '#/signup'; // se cambia ventana a signup para registrarse
  });
  return divElementLogin;
};
