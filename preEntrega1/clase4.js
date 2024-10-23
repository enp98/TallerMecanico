

const autos = []

function agregarAuto(){
    let patente = parseInt(prompt("agregue la patente del auto a ingresar:"))
    autos.push(patente) // Agregar el auto al array
}
// Opción para ver la lista de autos
function mostrarPatentes(){
    let listaPatente = "los autos ingresados son:"
    for(let i = 0; i<=autos.length; i++){
        alert(listaPatente  +  autos) 
     }
}
    
// Ingresa el auto con el primer turno, lo elimina de la lista e indica que preparen el siguiente
function siguienteAuto(){
    let primerAuto = autos.shift()
    if(autos.length === 0){
        alert(`ingresar el auto con patente ${primerAuto}`)
    } else {
        alert(`ingresar el auto con patente ${primerAuto} y mover el auto con patente ${autos[0]}`)
    }
}

// Busca una patente ingresada 
const encontrarPatente = (autos) =>{
    const indiceAutos = autos.indexOf(autos)
    return(alert(`tenemos el auto ingresado en la lista`))
}
function seleccionarOpcion(opcion){
    switch(opcion){
        case 1:
            agregarAuto()
            break;
        case 2:
            siguienteAuto();
            break;
        case 3:
            const npatente = prompt("Ingrese la patente")
            encontrarPatente(npatente);
            break;
        case 4:
            mostrarPatentes()
            break;  
        default:
            alert("Dato no valido.") 
    }
}


function tallerMecanico(){
    let loop = true
    alert("buenos dias")
    while(loop){
        let opcion = parseInt(prompt("Elige una opcion: \n 1 - Agregar auto \n 2 -   Auto siguiente \n 3 - Buscar auto ingresado \n 4 - Ver lista de patentes "))
        seleccionarOpcion(opcion)
        loop = confirm("desea seguir operando?")
    }
    alert("Hasta luego")
}
tallerMecanico()