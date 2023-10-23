function controlarOverflowHover(navbarID, nuevoOverflow) {
  const elemento = document.getElementById(navbarID);

  if (elemento) {
    elemento.addEventListener("mouseenter", function () {
      if (nuevoOverflow !== undefined) {
        elemento.style.overflow = nuevoOverflow;
      }
    });

    elemento.addEventListener("mouseleave", function () {
      // Restaurar la propiedad "overflow" original al salir del hover
      elemento.style.overflow = "";
    });
  }
}

// Ejemplo de uso:
// Cambiar la propiedad "overflow" a "auto" al hacer hover sobre
// el elemento con ID "miElemento"
controlarOverflowHover("navbarID", "visible");
