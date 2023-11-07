const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});
/*Inicio Registro Inicial Usuario*/
/*  Validar que el ID de usuario solo contenga caracteres alfanuméricos*/
(function () { var id = document.getElementById("id"); id.addEventListener("input", function () { var regex = /^[a-zA-Z0-9]+$/; if (!regex.test(id.value)) { id.style.borderColor = "#ff0000"; } else { id.style.borderColor = "#ccc"; } });

/* Validar que la contraseña solo contenga caracteres alfanuméricos*/

var password = document.getElementById("password");
password.addEventListener("input", function() {
  var regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(password.value)) {
    password.style.borderColor = "#ff0000";
  } else {
    password.style.borderColor = "#ccc";
  }
});
/*Validar que el correo electrónico sea válido*/
var email = document.getElementById("email");
email.addEventListener("input", function() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
  if (!regex.test(email.value)) {
    email.style.borderColor = "#ff0000";
  } else {
    email.style.borderColor = "#ccc";
  }
});
})();
/*Fin Registro Inicial Usuario*/
