
var administrativo = function (id, Nombre, Apellido, ) {
    this.id = id;
    this.nombre = Nombre;
    this.apellido = Apellido;
}

var crearProfesional = function (userName, password, Nombre, Apellido, Especialidad, ObraSocial, EstadoCuenta) {
    //Crear nuevo Usuario en (TablasUsers.js) ---> Es para el Login
    var newId = crearUsuario(userName, password, "prof");
    //Crear nuevo profesionales en (panelProfApp.js)---> Es para guardar la info del prof
    Profesionales.push(new profesional(newId, Nombre, Apellido, Especialidad, ObraSocial, EstadoCuenta));
    guardarLS("Profesionales", Profesionales);
}

var cargarDatosNuevosUsuarios = function () {

    var username = document.getElementById("disModal6").value;
    var password = document.getElementById("disModal7").value;
    var nombre = document.getElementById("disModal2").value;
    var apellido = document.getElementById("disModal3").value;
    var especialidad = document.getElementById("especialidad").value;
    var obrasocial = document.getElementById("obraSocial").value;
    var estadodecuenta = document.getElementById("disabledSelect").value;
    if(validarDatos(nombre,apellido)) {
        crearProfesional(username, password, nombre, apellido, especialidad, obrasocial, estadodecuenta) 
    } else { alert("Verificar datos ingresados")}   
    
}

 //Validar datos. nombre y apellido > 1 caracter.   + Usuario que no se repita  + validar password

 var validarDatos = function (nombre, apellido) {
    if((nombre.length > 0) && (apellido.length > 0 )) {
        return true
    }
 }


var crearUsuario = function (userName, password, tipo) {
    var numeroId = averiguarId();
    Usuarios.push(new datosUsers(numeroId, userName, password, tipo))
    guardarLS("Usuarios", Usuarios);
    return numeroId;
}

var averiguarId = function () {
    var num = Usuarios.length + 1;
    return num.toString();
}

var Admins = [
    new administrativo('1', 'Roberto', 'Html'),
    new administrativo('2', 'Tatiana', 'Zamudio'),
]

var adminLogueado = undefined; // inicioS() guardara aqui el objeto que representa al Admin logueado.

var inicioS = function () {
    adminLogueado = Admins.find(function (element) {
        return element.id == localStorage.getItem('id');
    });
    document.getElementById("Administrativo").innerHTML = "Panel de control de " + adminLogueado.nombre;
}

// Funcionalidad para cargar la tabla de profesionales dinamicamente

function addRow(tableID, profID, nombreProf, especialidad) {
    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById(tableID);

    // Inserta una fila en la tabla, en el ultimo indice
    var newRow = tableRef.insertRow();

    // Inserta una celda en la fila, en el ultimo indice
    var newCell1 = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newCell3 = newRow.insertCell();
    var newCell4 = newRow.insertCell();
    
    // Añade un nodo de texto a la celda
    var newText1 = document.createTextNode(profID);
    var newText2 = document.createTextNode(nombreProf);
    var newText3 = document.createTextNode(especialidad)
    var botonVer = newCell4.insertAdjacentHTML('afterbegin', '<td> <button type="button" class="btn btn-outline-secondary btn-sm py-0" data-toggle="modal" data-target="#modalProfesionalesXL">ver</button></td>');
   
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);   
    
}

function vaciarTabla(tableID) {
    var numeroDeFilas = document.getElementById(tableID).rows.length - 2;
    for (paso = 0; paso < numeroDeFilas; paso++) {
        document.getElementById(tableID).deleteRow(-1);
    };
}

function cargarDatosTabla(arrayDeDatos, tableID) {
    vaciarTabla(tableID)
    //Recorrrer el array Profesionales para que muestre los datos en la tabla 
    //porcada registro del arrray
    arrayDeDatos.forEach(element => {
        //llamar a la funcion addRow y pasarle los parametros a completar
        addRow(tableID, element.id, element.nombre, element.especialidad)
    });

}









window.onload = inicioS();