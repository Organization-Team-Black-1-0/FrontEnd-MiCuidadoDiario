const PATHS = {
  home: {
    path: "/",
    template: `
    <main class="main">
    <section id="home-section">
      <picture class="main__picture">
        <img src="./utilities/img/imagenHome.jpg" class="main__img" alt="Cuidado Diario">
      </picture>
      <div class="wrap-home-section">
        <h1><strong> Mi Cuidado Diario</strong></h1>
        <h2>¡Tu bienestar, nuestra prioridad diaria!</h2>
        <p>Mi cuidado diario es una herramienta que te permitirá como cuidador, seguir y controlar la presión arterial, brindar apoyo recordando las actividades que a diario se deben realizar para garantizar la supervivencia física y emocional del adulto mayor.</p>
        <!--a class="button" href="#register-section">Crea tu cuenta aquí</a-->          
        <!--button type="button" class="button" href='#registro' ;> ¡Registrarse! </button-->
      </div>
    </section>
    
    <section class="checkList-section">
        <p> Una característica destacada de Mi Cuidado Diario es el checklist, que te permite marcar las actividades que deben llevarse a cabo durante el día. Algunos ejemplos incluyen tomar la presión por la mañana y por la tarde, evaluar el estado de ánimo y la salud física del adulto mayor, así como realizar actividades de higiene y comodidad para asegurar su bienestar y tranquilidad.</p>
      </div>
      <div class="wrap-checkList-section">
        <!--a href="" class="item-checkList-section">
          <img src="utilities/img/riesgoMedico1.png" alt="Riesgo Medico">
          <p>Riesgo Médico</p>
          </img>
        </a-->
        <a href="" class="item-checkList-section">
          <img src="utilities/img/higiene.png" alt="Riesgo Fisico">
          <p>Higiene y Confort</p>
          </img>
        </a>
        <a href="" class="item-checkList-section">
          <img src="utilities/img/saludMentalAdultoMayor1.png" alt="Riesgo Psicológico">
          <p>Estado de Animo</p>
          </img>
        </a>
        <a href="" class="item-checkList-section">
          <img src="utilities/img/SignosVitales1.png" alt="Signos Vitales">
          <p>Presión Arterial (SV)</p>
          </img>
        </a>
      </div>
    </section>
  </main>
  <script src="main.js"></script> 
  <footer class="footer-section">
    <div class="footer-creds">
        <h3>©Copyright 2023 - Team Black 1.</h3>
        <marquee> <h3> Proyecto educativo para las  Olimpiadas COPA 2023</h3></marquee>
    </div>    
  </footer>
        `,
  },
  register: {
    path: "/register",
    template: `
        
        <main class="main">
        <section id="register-section">
      <picture class="main__picture">
        <img src="./utilities/img/adultoMayor.jpg" class="main__img" alt="persona-cuidadora">
      </picture>
      <div class="wrap-home-section">
          <h1><strong> Mi Cuidado Diario</strong></h1>
          <p>¡Tu bienestar, nuestra prioridad diaria!.</p>
          <h3 class="login-title">Usuario </h3>
          <input class="Inputs-L" type="text" id="userSignUp"  placeholder="Ingresa un Usuario"   maxlength="30" required></input> 
          <h3 class="login-title">Correo </h3>
          <input class="Inputs-L" type="text" id="userSignUp1"  placeholder="Ingresa tu Correo"   maxlength="30" required></input> 
          <h3 class="login-title">Contraseña </h3>     
          <input class="Inputs-L" type="password" id="passwordSignUp" placeholder="Ingresa una contraseña" maxlength="10"  required ></input>
          <br/>
          <button class="button" id="register"   type="submit">Regístrarse</button>
      </div>	
    </section>
    
  </main>
  <script src="main.js"></script> 
  <footer class="footer-section">
    <div class="footer-creds">
        <h3>©Copyright 2023 - Team Black 1.</h3>
        <marquee> <h3> Proyecto educativo para las  Olimpiadas COPA 2023</h3></marquee>
    </div>    
  </footer>
      
        `,
  },
  login: {
    path: "/login",
    template: `
        <main class="main">
    
    <section id="login-section">
      <picture class="main__picture">
        <img src="./utilities/img/adultoMayor.jpg" class="main__img" alt="persona-cuidadora">
      </picture>
      <div class="wrap-home-section">
          <h1><strong> Mi Cuidado Diario</strong></h1>
          <p>¡Tu bienestar, nuestra prioridad diaria!.</p>
          <h3 class="login-title">Usuario </h3>
          <input class="Inputs-L" type="text" id="userSignUp"  placeholder="Ingresa tu Usuario"   maxlength="30" required></input> 
          <h3 class="login-title">Contraseña </h3>     
          <input class="Inputs-L" type="password" id="passwordSignUp" placeholder="Ingresa tu contraseña" maxlength="10"  required ></input>
          <br/>
          <button class="button" id="register"   type="submit">Iniciar Sesión</button>
       </div>	
    </section>
    
  </main>
  <script src="main.js"></script> 
  <footer class="footer-section">
    <div class="footer-creds">
        <h3>©Copyright 2023 - Team Black 1.</h3>
        <marquee> <h3> Proyecto educativo para las  Olimpiadas COPA 2023</h3></marquee>
    </div>    
  </footer>	
        `,
  },
};
