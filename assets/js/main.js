//validar tel:

function validar() {
    var phone = document.getElementById(validNumber);
    var regExp = /^\d{9}$/; //<--- con esto vamos a validar el numero

    if (phone.value == "''") {
        alert("Please fill with a valid 8 digit number.");
    } else if (!regExp.test(phone.value))
        alert("Please fill with a valid 8 digit number.");
} else {
    return true;
}

//evento escuchar click de become a driver para disparar funcion validar()
function clickValido() {
    var boton = document.getElementById(btn);
    boton.addEventListener("click", validar());
}



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