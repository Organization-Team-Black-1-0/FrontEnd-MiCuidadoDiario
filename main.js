const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});
/*Inicio Registro Inicial Usuario*/

const formulario = document.querySelector("form");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombreUsuario = formulario.querySelector("input[name='nombre_usuario']").value;
  const correoElectronico = formulario.querySelector("input[name='correo_electronico']").value;
  const contrasena = formulario.querySelector("input[name='contrasena']").value;

  if (nombreUsuario === "") {
    alert("El nombre de usuario no puede estar vacío");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(correoElectronico)) {
    alert("El correo electrónico no es válido");
    return;
  }

  if (contrasena.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  const usuario = {
    nombre_usuario: nombreUsuario,
    correo_electronico: correoElectronico,
    contrasena: contrasena,
  };

  const respuesta = await fetch("/registrar", {
    method: "post",
    body: JSON.stringify(usuario),
  });

  if (respuesta.status === 200) {
    // El usuario se ha registrado correctamente
    alert("El usuario se ha registrado correctamente");
    window.location.href = "/";
  } else {
    // Se ha producido un error al registrar el usuario
    alert("Se ha producido un error al registrar el usuario");
  }
});



/*Fin Registro Inicial Usuario*/
