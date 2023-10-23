// $(function () {
//     $(".custom-navbar li").click(function (e) {
//         e.preventDefault();
//         $(".custom-navbar li").removeClass("active");
//         $(this).addClass("active");
//     });
// });

function scrollToPagOne() {
    var pageOne = document.getElementById('pag-uno');
    pageOne.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPagTwo() {
    var pageTwo = document.getElementById('pag-dos');
    pageTwo.scrollIntoView({ behavior: 'smooth' });
}

function scrollToPagThree() {
    var form = document.getElementById('form');
    var pageThree = document.getElementById('pag-tres');
    pageThree.scrollIntoView({ behavior: 'smooth' });
}

var pagSiguiente = document.getElementById("sig-pag");
var pagAnterior = document.getElementById("pag-anterior");
var pagOneSpan = document.getElementById("pag-uno-span");
var pagTwoSpan = document.getElementById("pag-dos-span");
var pagThreeSpan = document.getElementById("pag-tres-span");


// pagSiguiente.addEventListener("click", pagChangeForward);
// function pagChangeForward(){ 
//     if (pagOneSpan.classList.contains("pag-tab-select") && pagTwoSpan.classList.contains("pag-tab") && pagThreeSpan.classList.contains("pag-tab")) {
//         scrollToPagTwo();
//         pagOneSpan.classList.remove("pag-tab-select");
//         pagOneSpan.classList.add("pag-tab");
//         pagTwoSpan.classList.add("pag-tab-select");
//         pagTwoSpan.classList.remove("pag-tab");
//         pagAnterior.classList.add("primary-dark-btn")
//     } else if (pagOneSpan.classList.contains("pag-tab") && pagTwoSpan.classList.contains("pag-tab-select") && pagThreeSpan.classList.contains("pag-tab")) {
//         scrollToPagThree();
//         pagThreeSpan.classList.add("pag-tab-select");
//         pagThreeSpan.classList.remove("pag-tab");
//         pagTwoSpan.classList.add("pag-tab");
//         pagTwoSpan.classList.remove("pag-tab-select");
//         pagAnterior.classList.add("primary-dark-btn")
//         pagSiguiente.classList.remove("primary-dark-btn")
//         pagSiguiente.classList.add("primary-btn")
//     } 
// }

// pagAnterior.addEventListener("click", pagChangeBack);
// function pagChangeBack(){ 
//     if (pagOneSpan.classList.contains("pag-tab") && pagTwoSpan.classList.contains("pag-tab") && pagThreeSpan.classList.contains("pag-tab-select")) {
//         scrollToPagTwo();
//         pagThreeSpan.classList.remove("pag-tab-select");
//         pagThreeSpan.classList.add("pag-tab");
//         pagTwoSpan.classList.add("pag-tab-select");
//         pagTwoSpan.classList.remove("pag-tab");
//         pagAnterior.classList.add("primary-dark-btn")
//         pagSiguiente.classList.add("primary-dark-btn")
//         pagSiguiente.classList.remove("primary-btn")
//     } else if (pagOneSpan.classList.contains("pag-tab") && pagTwoSpan.classList.contains("pag-tab-select") && pagThreeSpan.classList.contains("pag-tab")) {
//         scrollToPagOne();
//         pagOneSpan.classList.add("pag-tab-select");
//         pagOneSpan.classList.remove("pag-tab");
//         pagTwoSpan.classList.add("pag-tab");
//         pagTwoSpan.classList.remove("pag-tab-select");
//         pagAnterior.classList.remove("primary-dark-btn")
//     } 
// }
