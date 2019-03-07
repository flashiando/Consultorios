// d-none en secciones
// active en links
// confirmar si se puede refactorizar

function linksNonActiveAll() {
    document.getElementById("linkTicketsPrivados").classList.remove('active');
    document.getElementById("linkTicketsPublicos").classList.remove('active');
    document.getElementById("linkProfesionales").classList.remove('active');
    document.getElementById("linkConsultorios").classList.remove('active');
    document.getElementById("linkAlquileres").classList.remove('active');
    document.getElementById("linkDeudas").classList.remove('active');
}

function seccionDnoneAll() {
    document.getElementById("seccionTicketsPublicos").classList.add('d-none');
    document.getElementById("seccionTicketsPrivados").classList.add('d-none');
    document.getElementById("seccionProfesionales").classList.add('d-none');
    document.getElementById("seccionConsultorios").classList.add('d-none');
    document.getElementById("seccionAlquileres").classList.add('d-none');
    document.getElementById("seccionDeudas").classList.add('d-none');
    document.getElementById("botonSumarProf").classList.add('d-none');
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

function funcionLinkConsultorios() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkConsultorios").classList.add('active');
    document.getElementById("seccionConsultorios").classList.remove('d-none');
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

function funcionNavTab1(){
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab1").classList.add('active');
    document.getElementById("infoDelProfesional").classList.add('active');
}
function funcionNavTab2(){
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab2").classList.add('active');
    document.getElementById("historialAlquileresProfesional").classList.add('active');
}
function funcionNavTab3(){
    funcionNavTabsAndPaneNonActive();
    document.getElementById("navTab3").classList.add('active');
    document.getElementById("historialTicketsProfesional").classList.add('active'); 
}

//boton editar

