//formulario
const inputName = document.getElementById('inputName');
const inputApellido = document.getElementById('inputApellido');
const inputCargo = document.getElementById('inputCargo');
const inputColorFavorito = document.getElementById('inputColorFavorito');
const inputAvatar = document.getElementById('inputAvatar');

//pre de las tarjetas
const cardName = document.getElementById('cardName');
const cardCargo = document.getElementById('cardCargo');
const cardAvatar = document.getElementById('cardAvatar');
const previewCard = document.getElementById('previewCard');

//boton
const btnGenerar = document.getElementById('btnGenerar');

const galeriaContenedor = document.getElementById('galeriaContenedor');

const cardForm = document.getElementById('cardForm');

function actualizarNombre() {

const nombre = inputName.value || "Tu Nombre";

const apellido = inputApellido.value || "Apellido";

cardName.textContent = `${nombre} ${apellido}`;

}

inputName.addEventListener('input', actualizarNombre);

inputApellido.addEventListener('input', actualizarNombre);

inputCargo.addEventListener('input', () => {
  cardCargo.textContent = inputCargo.value || "Tu Cargo";
});

inputColorFavorito.addEventListener('input', () => {
  previewCard.style.setProperty('--card-color', inputColorFavorito.value);
});

inputAvatar.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
	const reader = new FileReader();
	
	reader.onload = function(e) {
	cardAvatar.src = e.target.result;
	}
//por si no tenemosimagen, se carga la url de internet
	reader.readAsDataURL(file);
} else {
	cardAvatar.src = "https://st2.depositphotos.com/1007566/12301/v/450/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg";
 
	}

});
btnGenerar.addEventListener('click', () => {

if (!cardForm.checkValidity()) {

	alert("Rellena todos los campos correctamente.");

	return;

}


const nuevaTarjeta = document.createElement('div');

nuevaTarjeta.className = 'card'; 
nuevaTarjeta.innerHTML = previewCard.innerHTML;


const colorActual = inputColorFavorito.value;

nuevaTarjeta.querySelector('.card-header').style.backgroundColor = colorActual;



galeriaContenedor.appendChild(nuevaTarjeta);

cardForm.reset();

cardName.textContent = "Tu nombre y apellido...";
cardCargo.textContent = "Tu Cargo";

cardAvatar.src = "https://st2.depositphotos.com/1007566/12301/v/450/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg";

previewCard.style.setProperty('--card-color', '#000000');

});