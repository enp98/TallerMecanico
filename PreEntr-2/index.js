document.addEventListener("DOMContentLoaded", () => {
    const autos = JSON.parse(localStorage.getItem("autos")) || [];

    const inputPatente = document.getElementById("inputPatente");
    const resultado = document.getElementById("resultado");

    function guardarAutos() {
        localStorage.setItem("autos", JSON.stringify(autos));
    }

    function renderizarAutos() {
        resultado.innerHTML = "";
        if (autos.length === 0) {
            resultado.textContent = "No hay autos en la lista.";
            return;
        }
        const ul = document.createElement("ul");
        autos.forEach((auto) => {
            const li = document.createElement("li");
            li.textContent = auto.patente;
            ul.appendChild(li);
        });
        resultado.appendChild(ul);
    }

    function agregarAuto() {
        const patente = inputPatente.value.trim();
        if (patente) {
            autos.push({ patente });
            guardarAutos();
            renderizarAutos();
            inputPatente.value = "";
        } else {
            resultado.textContent = "Por favor, ingrese una patente válida.";
        }
    }

    function siguienteAuto() {
        if (autos.length === 0) {
            resultado.textContent = "No hay autos en la lista.";
            return;
        }
        const primerAuto = autos.shift();
        guardarAutos();
        renderizarAutos();
        resultado.textContent = `Ingresar el auto con patente ${primerAuto.patente}.`;

        if (autos.length > 0) {
            resultado.textContent += ` Siguiente auto: ${autos[0].patente}.`;
        }
    }

    function buscarAuto() {
        const patente = inputPatente.value.trim();
        if (!patente) {
            resultado.textContent = "Por favor, ingrese una patente para buscar.";
            return;
        }
        const autoEncontrado = autos.find((auto) => auto.patente === patente);
        if (autoEncontrado) {
            resultado.textContent = `Tenemos el auto con patente ${patente} en la lista.`;
        } else {
            resultado.textContent = `No tenemos el auto con patente ${patente} en la lista.`;
        }
    }

    document.getElementById("btnAgregarAuto").addEventListener("click", agregarAuto);
    document.getElementById("btnSiguienteAuto").addEventListener("click", siguienteAuto);
    document.getElementById("btnBuscarAuto").addEventListener("click", buscarAuto);
    document.getElementById("btnMostrarPatentes").addEventListener("click", renderizarAutos);

    renderizarAutos();
});

