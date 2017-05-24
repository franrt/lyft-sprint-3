/*El tablero no aparce en el sitio debido a que no hice el evento para que al 
presionar start cambiara al tablero, ni logré hacer el recorrido con el auto encima

//Defino el tablero
var tablero = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    //Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for (var i = 0; i < tablero.length; i++) {
    fila = document.createElement("div");
    fila.classList.add("fila");
    for (var j = 0; j < tablero[i].length; j++) {
        casilla = document.createElement("div");
        casilla.innerHTML = tablero[i][j];
        casilla.classList.add("casilla")
        fila.appendChild(casilla);
    }
    divTablero.appendChild(fila);
}

*/