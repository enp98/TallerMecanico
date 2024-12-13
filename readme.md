Proyecto de Gestión de Autos

Descripción

Este proyecto es una aplicación interactiva desarrollada en JavaScript que permite gestionar una lista de autos, donde cada auto tiene una patente, una marca y un modelo.




--Funcionalidades Principales:

1. Agregar Autos

Los usuarios pueden agregar autos ingresando su patente, marca y modelo a través de un formulario.

Los datos se almacenan en el navegador utilizando localStorage para garantizar la persistencia.

2. Visualizar Autos

La lista de autos se renderiza dinámicamente en el DOM.

Cada auto muestra su patente, marca y modelo de forma clara y organizada.

3. Eliminar Autos

Cada auto en la lista incluye un botón para eliminarlo.

Al hacer clic, el auto se elimina del DOM y de localStorage.

4. Persistencia de Datos

Los datos de los autos se guardan automáticamente en localStorage cada vez que se modifica la lista.

Al recargar la página, la información almacenada se recupera y se muestra automáticamente.

5. Uso de Librerías

El proyecto incluye el uso de una librería externa (e.g., SweetAlert2) para mejorar las interacciones y las notificaciones.

6. Asincronismo y Fetch

Se incluye una función para cargar información estática desde un archivo JSON utilizando la API fetch.




--Estructura del Código

-HTML
El archivo HTML contiene:

Un formulario para agregar autos con campos de entrada para patente, marca y modelo.

Una lista dinámica donde se muestran los autos agregados.

-CSS
El archivo CSS define: (tengo un problema que cuando agrego un auto, y se activa la funcion del sweetalert, el footer cambia de posicion pero cuando se cierra el cartel vualve al pie de la pagina y queda normal. Sinceramente no tengo mas tiempo jaja hasta aca llegue.)

Estilo para el encabezado, formulario, botones, y lista.

Colores consistentes y un diseño responsivo.


-JavaScript

El archivo JS se organiza en:

-Funciones:

agregarAuto: Captura los datos del formulario y agrega un nuevo auto.

renderizarAutos: Muestra los autos en la lista dinámica.

eliminarAuto: Elimina un auto específico.

guardarAutos y cargarAutos: Manejan la persistencia con localStorage.

cargarDatosJSON: Utiliza fetch para cargar datos desde un archivo externo.



--Tecnologías Utilizadas

HTML5: Estructura del contenido.

CSS: Diseño y estilos.

JavaScript: Lógica y manipulación del DOM.

LocalStorage: Persistencia de datos.

Fetch API: Carga de datos de manera asincrónica.

SweetAlert2: Mejoras en la interfaz de usuario.



--Próximos Pasos para mejorar el proyecto(lo voy a mejorar para cuando tenga mi lubricentro)

Agregar una funcionalidad de búsqueda para filtrar autos por marca o modelo.

Implementar un sistema de ordenamiento por patente, marca o modelo.

Mejorar la responsividad para dispositivos móviles.



