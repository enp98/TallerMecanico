const autos = [];

function agregarAuto() {
    let patente = prompt("Agregue la patente del auto a ingresar:");
    autos.push(patente); // Agregar el auto al array
}

// Opción para ver la lista de autos
function mostrarPatentes() {
    if (autos.length === 0) {
        alert("No hay autos en la lista.");
        return;
    }
    let listaPatente = "Los autos ingresados son:\n";
    for (let i = 0; i < autos.length; i++) { 
        listaPatente += autos[i] + "\n"; // Ordena las patentes una abajo de otra con el salto de linea`\n`
    }
    alert(listaPatente);
 }


// Ingresa el auto con el primer turno, lo elimina de la lista e indica que preparen el siguiente
function siguienteAuto() {
    let primerAuto = autos.shift();
    if (primerAuto === undefined) {
         alert("No hay autos en la lista.");
         return;// Aca probre solo con un return pero cerraba el codigo y no me mostraba el mensaje. por lo que le agregue un alert antes del return para que me muestre el mensaje antes que lo finalice. 
    } else if (autos.length === 0) {
        alert(`Ingresar el auto con patente ${primerAuto}`);
    } else {
        alert(`Ingresar el auto con patente ${primerAuto} y mover el auto con patente ${autos[0]}`);//En este alert use ${primerAuto} porque toma el dato, lo muestra y lo borra, despues use ${autos[0]} para que muestre el primer dato o patente que queda en la variable.
    }
}

// Aca investigue el indexOF, cuando no encuentra el dato devuelve -1 entonces le puse un !== que me devuelve true si hay un dato y false si no lo hay. Asi deja seguir el codigo.
const encontrarPatente = (autos, patente) => {
    if (autos.indexOf(patente) !== -1) { 
        alert(`Tenemos el auto con patente ${patente} en la lista`);
    } else {
        alert(`No tenemos el auto con patente ${patente} ingresado en la lista`);
    }
};

function seleccionarOpcion(opcion) {
    switch (opcion) {
        case 1:
            agregarAuto();
            break;
        case 2:
            siguienteAuto();
            break;
        case 3:
            const npatente = prompt("Ingrese la patente a buscar:");
            encontrarPatente(autos, npatente); 
            break;
        case 4:
            mostrarPatentes();
            break;
        default:
            alert("Opción no válida.");
    }
}

function tallerMecanico() {
    let loop = true;
    alert("Buenos días");
    while (loop) {
        let opcion = parseInt(prompt("Elige una opción: \n 1 - Agregar auto \n 2 - Auto siguiente \n 3 - Buscar auto ingresado \n 4 - Ver lista de patentes "));
        seleccionarOpcion(opcion);
        loop = confirm("¿Desea seguir operando?");
    }
    alert("Hasta luego");
}

tallerMecanico();
