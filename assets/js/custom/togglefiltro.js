function toggleFiltro(event){
    var text = event.textContent || event.innerText;
    if ( text == 'Ver Filtros')
    {
        event.innerHTML= 'Ocultar Filtros';
        event.style.backgroundColor = '#9f2241';
    }
    else
    {
        event.innerHTML= 'Ver Filtros';
        event.style.backgroundColor = '#10312b';
    }

}