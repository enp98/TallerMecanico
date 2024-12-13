// Simulador de Autos: Gestión de Autos con Marca, Modelo y Patente

document.addEventListener("DOMContentLoaded", () => {
    const autos = JSON.parse(localStorage.getItem("autos")) || [];

    const inputPatente = document.getElementById("inputPatente");
    const inputMarca = document.createElement("input");
    inputMarca.id = "inputMarca";
    inputMarca.placeholder = "Ingrese marca";
    inputPatente.insertAdjacentElement("afterend", inputMarca);

    const inputModelo = document.createElement("input");
    inputModelo.id = "inputModelo";
    inputModelo.placeholder = "Ingrese modelo";
    inputMarca.insertAdjacentElement("afterend", inputModelo);

    const resultado = document.getElementById("listaAutos");

    function guardarAutos() {
        localStorage.setItem("autos", JSON.stringify(autos));
    }

    function renderizarAutos() {
        resultado.innerHTML = "";
        autos.forEach((auto, index) => {
            const li = document.createElement("li");
            li.textContent = `Patente: ${auto.patente}, Marca: ${auto.marca}, Modelo: ${auto.modelo}`;
            const eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.addEventListener("click", () => {
                autos.splice(index, 1);
                guardarAutos();
                renderizarAutos();
            });
            li.appendChild(eliminarBtn);
            resultado.appendChild(li);
        });
    }

    function agregarAuto() {
        const patente = inputPatente.value.trim().toUpperCase();
        const marca = inputMarca.value.trim();
        const modelo = inputModelo.value.trim();

        if (!patente || !marca || !modelo) {
            Swal.fire("Error", "Todos los campos son obligatorios", "error");
            return;
        }

        autos.push({ patente, marca, modelo });
        guardarAutos();
        renderizarAutos();

        inputPatente.value = "";
        inputMarca.value = "";
        inputModelo.value = "";
        Swal.fire("Éxito", "Auto agregado correctamente", "success");
    }

    function buscarAuto() {
        const patente = inputPatente.value.trim().toUpperCase();
        if (!patente) {
            Swal.fire("Error", "Ingrese una patente para buscar", "error");
            return;
        }

        const auto = autos.find(auto => auto.patente === patente);
        if (auto) {
            Swal.fire("Auto Encontrado", `Patente: ${auto.patente}, Marca: ${auto.marca}, Modelo: ${auto.modelo}`, "info");
        } else {
            Swal.fire("No encontrado", "No existe un auto con esa patente", "warning");
        }
    }

    document.getElementById("btnAgregarAuto").addEventListener("click", agregarAuto);
    document.getElementById("btnBuscarAuto").addEventListener("click", buscarAuto);

    renderizarAutos();
});
