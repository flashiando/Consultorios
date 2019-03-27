
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
    console.log('Funca');
    var username = document.getElementById("disModal5").value;
    console.log('username' + username);
    var password = document.getElementById("disModal6").value;
    console.log('password' + password);
    var nombre = document.getElementById("disModal2").value;
    console.log('nombre' + nombre);
    //var apellido = document.getElementById("disModal").value;  
    //Al modal de Crear profesional hay qe hacer un nuevo de apellido 
    var especialidad = document.getElementById("disModal3").value;
    console.log('especialidad' + especialidad )
    //var obrasocial = document.getElementById("obrasocial").value;
    //var estadodecuenta = document.getElementById("disModal4").value;
    //console.log("Estado de cuenta " + estadodecuenta);
    crearProfesional(username, password, nombre, 'apellido', especialidad, 'obrasocial', 'estadodecuenta')
    //console.log( username + password + nombre + apellido + especialidad + estadodecuenta );
}

//Al modal de Crear profesional hay qe hacer un nuevo de apellido  y de apellido 


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

function addRow(tableID,profID,nombreProf,especialidad) {
    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById(tableID);
  
    // Inserta una fila en la tabla, en el ultimo indice
    var newRow   = tableRef.insertRow();
  
    // Inserta una celda en la fila, en el ultimo indice
    var newCell1  = newRow.insertCell(); 
    var newCell2 = newRow.insertCell(); 
    var newCell3 = newRow.insertCell(); 
  
    // Añade un nodo de texto a la celda
    var newText1 = document.createTextNode(profID);
    var newText2 = document.createTextNode(nombreProf);
    var newText3 = document.createTextNode(especialidad)
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    //falta insertar boton de 'Ver'
  }





window.onload = inicioS();