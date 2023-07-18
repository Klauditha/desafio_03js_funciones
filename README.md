
# Desafio_03js_funciones

Desafio 3 del modulo de Javascript

## Reto 1

Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado `1 funcion.js`

````markdown
function example(a, b, c){
    return a+b+c
}
````

## Reto 2

Transforma la siguiente función a una arrow function de una línea. Este ejercicio debe quedar en un archivo llamado `2 arrow.js`

````markdown
suma = function(a, b){
    return a + b
}
````

## Reto 3

Se tiene como base el siguiente ejercicio que cambia el color de un elemento de HTML al hacerle click.

````markdown
<div id="ele1"> hello </div>

<script>
function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);
</script>
````

3.1 Separa el código en 2 archivos: 3 pintar.html y script.js. El script js debe estar dentro de la carpeta assets/js . Para obtener el puntaje debes entregar los archivos cumplimiento la estructura pedida en conjunto con los requerimientos de 3.2 y 3.3

3.2. Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función. Para obtener el puntaje, debes entregar el 3 pintar.html válido funcionando en conjunto con el código modificado.

Tip: revisa en la guía las funciones anónimas.

3.3. Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color.

## Reto 4

Construye una página web 4_colores.html con las siguientes características

● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener un identificador único.

● Dentro del script agrega el evento para que al hacerle click a uno de los divs, este cambie de color al color negro. Utiliza addEventListener para agregar el evento.

● Crea un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada.
    ○ La letra a guardará el color rosado
    ○ La letra s guardará el color naranjo.
    ○ La letra d guardará el color celeste.
    ○ Para guardar el color revisa el tip al final del enunciado.
    ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de color blanco y borde negro.
    ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div “key” a morado, gris o rosado respectivamente.

● Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se deberá crear un div nuevo de las mismas dimensiones antes mencionadas con los colores celeste, naranjo y café respectivamente.

````markdown
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
    } else if (event.key === 's') {
        /* Cambiar a color 2 */
    }
})
````