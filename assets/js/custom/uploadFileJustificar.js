const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const fileNameDisplay = document.querySelector("#drop-area p");

inputFile.addEventListener("change", uploadFile);

function uploadFile() {
  const selectedFile = inputFile.files[0];
  const fileName = selectedFile.name;
  fileNameDisplay.textContent = `${fileName}`;
}

dropArea.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
  e.preventDefault();

  const droppedFiles = e.dataTransfer.files;
  const validExtensions = [".pdf", ".png", ".jpg"];

  for (const file of droppedFiles) {
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (validExtensions.includes("." + fileExtension)) {
      inputFile.files = e.dataTransfer.files;
      // También puedes mostrar el nombre del archivo en tu etiqueta <p>
      const span = dropArea.querySelector("p");
      span.textContent = file.name;
    } else {
      // Archivo no válido, puedes mostrar un mensaje de error
      alert(
        "Tipo de archivo no válido. Solo se permiten archivos PDF, PNG y JPG."
      );
    }
  }
});

function clearInputFile() {
  const inputFile = document.getElementById("input-file");
  const fileNameDisplay = document.querySelector("#drop-area p");

  inputFile.value = ""; // Limpia el valor del input
  fileNameDisplay.textContent = "Adjuntar archivo"; // Restablece el texto del nombre del archivo
}

//Valida que haya contenido en la justificacion y modifica el color del border en relacion a ello
const inputJustificacion = document.querySelector(".inputJustificacion");

// Obtén referencias a los botones "Justificar" y "Guardar"
const btnJustificar = document.getElementById("btnJustificar");
const btnGuardar = document.getElementById("btnGuardar");

// Agrega un manejador de clic para los botones
btnJustificar.addEventListener("click", function () {
  if (inputJustificacion.value.trim() === "") {
    inputJustificacion.style.border = "2px solid red";
  } else {
    inputJustificacion.style.border = ""; // Restaura el estilo de borde predeterminado
  }
});

btnGuardar.addEventListener("click", function () {
  if (inputJustificacion.value.trim() === "") {
    inputJustificacion.style.border = "2px solid red";
  } else {
    inputJustificacion.style.border = ""; // Restaura el estilo de borde predeterminado
  }
});

// Muestra la notificaccion de exito o de error al tratar de justificar un pedimento
document.getElementById("btnJustificar").addEventListener("click", function () {
  const justificacionInput = document.querySelector(".inputJustificacion");
  if (justificacionInput.value.trim() === "") {
    // Muestra el modal de error
    $("#modalErrorJustificar").modal("show");
  } else {
    // Cierra el modal de justificación
    $("#modalJustificarPedimento").modal("hide");

    // Muestra el Toast de éxito
    var toast = new bootstrap.Toast(document.getElementById("liveToast"));
    toast.show();
  }
});
