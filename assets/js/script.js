/*Funcion original*/
/*
function pintar(){
    ele.style.backgroundColor = 'yellow';
}
*/
function pintar(eleNew ,color = "green"){
    eleNew.style.backgroundColor = color;
}
const ele  = document.getElementById("ele1");
const color = "yellow";

ele.addEventListener("click", () => pintar(ele,color));


