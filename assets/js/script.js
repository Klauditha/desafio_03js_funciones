/*Funcion original*/
/*
function pintar(){
    ele.style.backgroundColor = 'yellow';
}
*/

const ele1  = document.getElementById("ele1");
const color = "yellow";

function pintar(color = "green"){
    ele1.style.backgroundColor = color;
}

ele1.addEventListener("click", function(){
    pintar(color);
});

