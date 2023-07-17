let ele1  = document.getElementById("ele1");
/*Punto 3.2 */
ele1.addEventListener("click", function(){
    ele1.style.backgroundColor = "yellow";
});
/*Punto 3.3*/
ele1.style.backgroundColor = "green";
function pintar(color){
    ele1.style.backgroundColor = color;
}
pintar("yellow");

