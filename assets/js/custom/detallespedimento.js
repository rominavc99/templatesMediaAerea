// Marca como activo uno de los items de la paginacion

var paginationItems = document.querySelectorAll(".page-itemDetalles");

// Agrega un evento de clic a cada elemento
paginationItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    // Elimina la clase "active" de todos los elementos
    paginationItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Agrega la clase "active" solo al elemento clicado
    item.classList.add("active");
  });
});

// Modifica el indicador del menu lateral de detalles en base a cuanto elementos hay en la paginacion
function updateItemsIndicator() {
  // Inicio Pedimento
  var pageItemsDetallesInicioPedimento = document.querySelectorAll(
    ".page-itemDetallesInicioPedimento"
  );
  var itemsIndicatorInicioPedimento = document.querySelector(
    ".itemsIndicatorInicioPedimento"
  );

  // Datos Generales
  var pageItemsDetallesDatosGenerales = document.querySelectorAll(
    ".page-itemDetallesDatosGenerales"
  );
  var itemsIndicatorDatosGenerales = document.querySelector(
    ".itemsIndicatorDatosGenerales"
  );

  // Fechas
  var pageItemsDetallesFechas = document.querySelectorAll(
    ".page-itemDetallesFechas"
  );
  var itemsIndicatorFechas = document.querySelector(".itemsIndicatorFechas");

  // Identificadores a nivel pedimento
  var pageItemsDetallesIdentificadoresPedimento = document.querySelectorAll(
    ".page-itemDetallesIdentificadoresPedimento"
  );
  var itemsIndicatorIdentificadoresPedimento = document.querySelector(
    ".itemsIndicatorIdentificadoresPedimento"
  );

  // Contribuciones a nivel pedimento
  var pageItemsDetallesContribucionesPedimento = document.querySelectorAll(
    ".page-itemDetallesContribucionesPedimento"
  );
  var itemsIndicatorContribucionesPedimento = document.querySelector(
    ".itemsIndicatorContribucionesPedimento"
  );

  // Observaciones a nivel pedimento
  var pageItemsDetallesObservacionesPedimento = document.querySelectorAll(
    ".page-itemDetallesObservacionesPedimento"
  );
  var itemsIndicatorObservacionesPedimento = document.querySelector(
    ".itemsIndicatorObservacionesPedimento"
  );

  // Documentos que aparan pagos virtuales
  var pageItemsDetallesDocumentosPagosVirtuales = document.querySelectorAll(
    ".page-itemDetallesDocumentosPagosVirtuales"
  );
  var itemsIndicatorDocumentosPagosVirtuales = document.querySelector(
    ".itemsIndicatorDocumentosPagosVirtuales"
  );

  // Partidas
  var pageItemsDetallesPartidas = document.querySelectorAll(
    ".page-itemDetallesPartidas"
  );
  var itemsIndicatorPartidas = document.querySelector(
    ".itemsIndicatorPartidas"
  );

  // Actualiza el contenido de "itemsIndicator" con la cantidad de elementos "page-itemDetalles"

  if (pageItemsDetallesDatosGenerales.length === 1) {
    itemsIndicatorDatosGenerales.classList.add("d-none");
  } else {
    itemsIndicatorDatosGenerales.textContent =
      pageItemsDetallesDatosGenerales.length;
  }

  if (pageItemsDetallesFechas.length === 1) {
    itemsIndicatorFechas.classList.add("d-none");
  } else {
    itemsIndicatorFechas.textContent = pageItemsDetallesFechas.length;
  }

  if (pageItemsDetallesIdentificadoresPedimento.length === 1) {
    itemsIndicatorIdentificadoresPedimento.classList.add("d-none");
  } else {
    itemsIndicatorIdentificadoresPedimento.textContent =
      pageItemsDetallesIdentificadoresPedimento.length;
  }

  if (pageItemsDetallesContribucionesPedimento.length === 1) {
    itemsIndicatorContribucionesPedimento.classList.add("d-none");
  } else {
    itemsIndicatorContribucionesPedimento.textContent =
      pageItemsDetallesContribucionesPedimento.length;
  }

  if (pageItemsDetallesObservacionesPedimento.length === 1) {
    itemsIndicatorObservacionesPedimento.classList.add("d-none");
  } else {
    itemsIndicatorObservacionesPedimento.textContent =
      pageItemsDetallesObservacionesPedimento.length;
  }

  if (pageItemsDetallesDocumentosPagosVirtuales.length === 1) {
    itemsIndicatorDocumentosPagosVirtuales.classList.add("d-none");
  } else {
    itemsIndicatorDocumentosPagosVirtuales.textContent =
      pageItemsDetallesDocumentosPagosVirtuales.length;
  }

  if (pageItemsDetallesPartidas.length === 1) {
    itemsIndicatorPartidas.classList.add("d-none");
  } else {
    itemsIndicatorPartidas.textContent = pageItemsDetallesPartidas.length;
  }

  if (pageItemsDetallesInicioPedimento.length === 1) {
    itemsIndicatorInicioPedimento.classList.add("d-none");
  } else {
    itemsIndicatorInicioPedimento.textContent =
      pageItemsDetallesInicioPedimento.length;
  }
}

updateItemsIndicator();

function hideItemsIndicator() {
  // Obtén la lista de elementos "page-itemDetalles"
  var pageItemsDetalles = document.querySelectorAll(".page-itemDetalles");

  // Obtén el elemento "itemsIndicator" que deseas ocultar
  var itemsIndicator = document.getElementById("itemsIndicator");

  // Verifica si la lista de elementos "page-itemDetalles" está vacía
  if (pageItemsDetalles.length === 0) {
    // Oculta el contenido del "itemsIndicator" si no hay elementos en la paginación
    itemsIndicator.style.display = "none";
  } else {
    // Muestra el contenido del "itemsIndicator" si hay elementos en la paginación
    itemsIndicator.style.display = "inline"; // O el valor deseado para mostrarlo
  }
}

hideItemsIndicator();

document.addEventListener("DOMContentLoaded", function () {
  // Obtén una lista de todos los elementos del menú
  var menuItems = document.querySelectorAll(".navLinkDetalles");

  // Agrega un evento de clic a cada elemento del menú
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Desactiva la clase "active" en todos los elementos del menú
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });

      // Activa la clase "active" solo en el elemento clicado
      item.classList.add("active");

      // Obtén el valor del atributo data-target
      var target = item.getAttribute("data-target");

      // Oculta todas las secciones que no están activas
      document.querySelectorAll(".seccion").forEach(function (sec) {
        if (sec.id !== target) {
          sec.classList.add("d-none");
          sec.classList.remove("d-flex");
        }
      });

      // Obtén la sección correspondiente al elemento del menú
      var seccion = document.getElementById(target);

      // Muestra la sección activa
      seccion.classList.add("d-flex");
      seccion.classList.remove("d-none");
    });
  });
});
