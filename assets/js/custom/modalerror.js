document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      var searchInputValue = document.getElementById("searchInput").value;
      var formattedValue = '<strong style="color: red;">' + searchInputValue + '</strong>'; // Envuelve el valor en negrita y color rojo
      $('#searchResult').html('No se ha encontrado el pedido con folio: ' + formattedValue);
      $('.modal-error').prependTo("body").modal('show');
    }
  });