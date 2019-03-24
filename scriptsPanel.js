// d-none en secciones
// active en links
// confirmar si se puede refactorizar

function linksNonActiveAll() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkAdministrativos").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
}

function seccionDnoneAll() {
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
    document.getElementById("seccionTicketsPrivados").classList.add('d-none');
    document.getElementById("seccionProfesionales").classList.add('d-none');
    document.getElementById("seccionAdministrativos").classList.add('d-none');
    document.getElementById("seccionConsultorios").classList.add('d-none');
    document.getElementById("seccionAlquileres").classList.add('d-none');
    document.getElementById("seccionDeudas").classList.add('d-none');
    document.getElementById("botonSumarProf").classList.add('d-none');
    document.getElementById("botonSumarAdm").classList.add('d-none');

}

function funcionLinkTicketsPublicos() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkTicketsPublicos").classList.add('active');
    document.getElementById("seccionTicketsPublicos").classList.remove('d-none');
}

function funcionLinkTicketsPrivados() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkTicketsPrivados").classList.add('active');
    document.getElementById("seccionTicketsPrivados").classList.remove('d-none');
}

function funcionLinkProfesionales() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkProfesionales").classList.add('active');
    document.getElementById("seccionProfesionales").classList.remove('d-none');
    document.getElementById("botonSumarProf").classList.remove('d-none');
}

function funcionLinkAdministrativos() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkAdministrativos").classList.add('active');
    document.getElementById("seccionAdministrativos").classList.remove('d-none');
    document.getElementById("botonSumarAdm").classList.remove('d-none');
}

function funcionLinkConsultorios() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkConsultorios").classList.add('active');
    document.getElementById("seccionConsultorios").classList.remove('d-none');
    document.getElementById("botonSumarConsul").classList.remove('d-none');

}

function funcionLinkAlquileres() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkAlquileres").classList.add('active');
    document.getElementById("seccionAlquileres").classList.remove('d-none');
}

function funcionLinkDeudas() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkDeudas").classList.add('active');
    document.getElementById("seccionDeudas").classList.remove('d-none');
}

//navtabs

function funcionNavTabsAndPaneNonActive() {
    document.getElementById("navTab1").classList.remove('active');
    document.getElementById("navTab2").classList.remove('active');
    document.getElementById("navTab3").classList.remove('active');
    document.getElementById("infoDelProfesional").classList.remove('active');
    document.getElementById("historialAlquileresProfesional").classList.remove('active');
    document.getElementById("historialTicketsProfesional").classList.remove('active');
}

function funcionNavTab1() {
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab1").classList.add('active');
    document.getElementById("infoDelProfesional").classList.add('active');
}
function funcionNavTab2() {
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab2").classList.add('active');
    document.getElementById("historialAlquileresProfesional").classList.add('active');
}
function funcionNavTab3() {
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab3").classList.add('active');
    document.getElementById("historialTicketsProfesional").classList.add('active');
}

//boton editar


// funcion remover

function funcionRemoverReadonlys() {
    document.getElementById("disModal2").removeAttribute("readonly");
    document.getElementById("disModal3").removeAttribute("disabled");
    document.getElementById("disModal4").removeAttribute("disabled");
    document.getElementById("disModal5").removeAttribute("readonly");
    document.getElementById("disModal6").removeAttribute("readonly");
    document.getElementById("disModal7").removeAttribute("disabled");
}

// funcion setear
function funcionSetearReadonlys() {
    document.getElementById("disModal2").setAttribute("readonly", "");
    document.getElementById("disModal3").setAttribute("disabled", "disabled");
    document.getElementById("disModal4").setAttribute("disabled", "disabled");
    document.getElementById("disModal5").setAttribute("readonly", "");
    document.getElementById("disModal6").setAttribute("readonly", "");
    document.getElementById("disModal7").setAttribute("disabled", "disabled");
}


//funciones editar

document.getElementById("switchEditar2").addEventListener("click", function () {
    document.getElementById("disModal2").toggleAttribute("readonly");
});
document.getElementById("switchEditar3").addEventListener("click", function () {
    document.getElementById("disModal3").toggleAttribute("disabled");
});
document.getElementById("switchEditar4").addEventListener("click", function () {
    document.getElementById("disModal4").toggleAttribute("disabled");
});
document.getElementById("switchEditar5").addEventListener("click", function () {
    document.getElementById("disModal5").toggleAttribute("readonly");
});
document.getElementById("switchEditar6").addEventListener("click", function () {
    document.getElementById("disModal6").toggleAttribute("readonly");
});
document.getElementById("switchEditar7").addEventListener("click", function () {
    document.getElementById("disModal7").toggleAttribute("disabled");
});


//funcion togglear agregar especialidad, revisar para eliminar especialidad

$("#checkAgregarEsp").click(function(){
    $("#campoAgregar").toggleClass("d-none");
  });

//funcion boton sumar profesional, esto es para que se sumen todos los parametros a 1 sola funcion aca.

function funcionBotonProfesionales() {
    funcionSetearReadonlys()
}

//funcion boton sumar administrativo, esto es para que se sumen todos los parametros a 1 sola funcion aca.

function funcionBotonAdministrativos() {
    funcionSetearReadonlys()
}

//funciones para modal al salir del mismo
//se necesitan los IF para que no duplique el readonly?

function funcionSalirModalSinGrabar() {
    funcionSetearReadonlys();
}

function funcionModalGrabando() {
    funcionSetearReadonlys();
}