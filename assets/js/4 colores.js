const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
let colorGlobal = '';
const key = document.getElementById('key');
const nuevoItem = document.getElementById('newDiv')
let nuevoDiv = '';

color1.addEventListener('click', function () {
    color1.style.backgroundColor = 'black';
});

color2.addEventListener('click', function () {
    color2.style.backgroundColor = 'black';
});

color3.addEventListener('click', function () {
    color3.style.backgroundColor = 'black';
});

color4.addEventListener('click', function () {
    color4.style.backgroundColor = 'black';
});

function crearDiv(color){
    nuevoDiv = document.createElement("div");
    nuevoDiv.setAttribute("id","key1");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;   
    document.body.appendChild(nuevoDiv);
}

document.addEventListener("keydown", function(event){
    if (event.key === 'a') {
    colorGlobal = 'pink';                         /*color rosado*/
    key.style.backgroundColor = '#572364';   /*color morado*/

    } else if (event.key === 's') {
    colorGlobal = 'orange';                       /*color naranjo*/
    key.style.backgroundColor = 'gray';      /*color gris*/

    } else if (event.key === 'd') {
    colorGlobal = '#B2FFFF';                      /*color celeste*/
    key.style.backgroundColor = 'pink';      /*color rosado*/

    }else if (event.key === 'q') {
        crearDiv('#B2FFFF'); /*color celeste*/
    }
    else if (event.key === 'w') {
        crearDiv('orange'); /*color naranjo*/
    }
    else if (event.key === 'e') {
        crearDiv('brown'); /*color naranjo*/
    }    
});