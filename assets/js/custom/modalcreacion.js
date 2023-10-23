document.addEventListener("DOMContentLoaded", function() {
    console.log("Script ejecutado"); // Agrega esta línea para verificar si el script se ejecuta
    const urlParams = new URLSearchParams(window.location.search);
    const mostrarModalParam = urlParams.get('mostrar_modal');
    console.log("mostrar_modal: " + mostrarModalParam); // Verifica si se obtiene el parámetro

    $(document).ready(function() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('mostrar_modal') === 'true') {
            $('#modal_creacion').modal('show');
        }
    });
    
    $(document).ready(function() {
        const urlParams = new URLSearchParams(window.location.search);

        // Verifica si el parámetro está presente y si la página se refrescó
        if (urlParams.get('mostrar_modal') === 'true' && window.performance.navigation.type === 1) {
            // Redirige a la URL predeterminada sin el parámetro
            window.location.href = window.location.href.split('?')[0];
        }
    });
});