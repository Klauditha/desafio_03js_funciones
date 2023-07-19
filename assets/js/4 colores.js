/*Declaracion de variables*/
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const key = document.getElementById('key');
let colorGlobal = '';
let nuevoDiv = '';
let detalle = document.getElementById('detalle');

const cambiaColorFondo = (cuadrado) =>
  (cuadrado.style.backgroundColor = 'black');

color1.addEventListener('click', function () {
  cambiaColorFondo(color1);
  detalle.innerHTML = 'Se ha hecho clic en color1';
});

color2.addEventListener('click', function () {
  cambiaColorFondo(color2);
  detalle.innerHTML = 'Se ha hecho clic en color2';
});

color3.addEventListener('click', function () {
  cambiaColorFondo(color3);
  detalle.innerHTML = 'Se ha hecho clic en color3';
});

color4.addEventListener('click', function () {
  cambiaColorFondo(color4);
  detalle.innerHTML = 'Se ha hecho clic en color4';
});

/*Se asume que solo debe existir un solo div con el id KEY*/
function crearDiv(color, letra) {
  if (document.getElementById('key1') != null) {
    nuevoDiv = document.getElementById('key1');
    nuevoDiv.style.backgroundColor = color;
  } else {
    nuevoDiv = document.createElement('div');
    nuevoDiv.setAttribute('id', 'key1');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
  }
  detalle.innerHTML =
    'Se presionado la tecla ' + letra + '. Color del div key1 es: ' + color;
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 'A') {
    colorGlobal = 'pink';
    key.style.backgroundColor = '#572364';
    detalle.innerHTML =
      'Se presionado la tecla ' +
      event.key +
      '. Color Global es: ' +
      colorGlobal +
      '. Color del div key es: ' +
      key.style.backgroundColor;
  } else if (event.key === 's' || event.key === 'S') {
    colorGlobal = 'orange';
    key.style.backgroundColor = 'gray';
    detalle.innerHTML =
      'Se presionado la tecla ' +
      event.key +
      '. Color Global es: ' +
      colorGlobal +
      '. Color del div key es: ' +
      key.style.backgroundColor;
  } else if (event.key === 'd' || event.key === 'D') {
    colorGlobal = '#B2FFFF';
    key.style.backgroundColor = 'pink';
    detalle.innerHTML =
      'Se presionado la tecla ' +
      event.key +
      '. Color Global es: ' +
      colorGlobal +
      '. Color del div key es: ' +
      key.style.backgroundColor;
  } else if (event.key === 'q' || event.key === 'Q') {
    crearDiv('#B2FFFF', event.key);
  } else if (event.key === 'w' || event.key === 'W') {
    crearDiv('orange', event.key);
  } else if (event.key === 'e' || event.key === 'E') {
    crearDiv('brown', event.key);
  }
});
