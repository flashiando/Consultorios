// d-none en secciones
// active en links

function linksNonActiveAll() {
    document.getElementById("linkMiInformacion").classList.remove('active');
    document.getElementById("linkMisTickets").classList.remove('active');
    document.getElementById("linkMisAlquileres").classList.remove('active');
}

function seccionDnoneAll() {
    document.getElementById("seccionMiInformacion").classList.add('d-none');
    document.getElementById("seccionMisTickets").classList.add('d-none');
    document.getElementById("seccionMisAlquileres").classList.add('d-none');
}

function funcionLinkMiInformacion() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkMiInformacion").classList.add('active');
    document.getElementById("seccionMiInformacion").classList.remove('d-none');
}

function funcionLinkMisTickets() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkMisTickets").classList.add('active');
    document.getElementById("seccionMisTickets").classList.remove('d-none');
}

function funcionLinkMisAlquileres() {
    linksNonActiveAll();
    seccionDnoneAll();
    document.getElementById("linkMisAlquileres").classList.add('active');
    document.getElementById("seccionMisAlquileres").classList.remove('d-none');
}

