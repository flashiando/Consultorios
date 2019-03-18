
var administrativo = function (id, Nombre, Apellido, ) {
    this.id = id;
    this.nombre = Nombre;
    this.apellido = Apellido;
}

var crearProfesional = function (userName, password, Nombre, Apellido, Especialidad, ObraSocial, EstadoCuenta) {
//Crear nuevo Usuario en (TablasUsers.js) ---> Es para el Login
    var newId = crearUsuario(userName,password,"Prof");
//Crear nuevo profesionales en (panelProfApp.js)---> Es para guardar la info del prof
Profesionales.push(new profesional(newId,Nombre,Apellido,Especialidad,ObraSocial,EstadoCuenta));
}


var crearUsuario = function (userName,password,tipo){
    var numeroId = averiguarId();
    Usuarios.push(new datosUsers(numeroId, userName, password,tipo))
    return numeroId;
}

var averiguarId = function (){
    var num = Usuarios.length + 1;
    return num.toString() ; 
}

var Admins = [
    new administrativo('1','Roberto','Html'),
    new administrativo('2','Tatiana','Zamudio'),
]

var adminLogueado = undefined; // inicioS() guardara aqui el objeto que representa al Admin logueado.

var inicioS = function () {       
    adminLogueado = Admins.find(function (element) {
        return element.id == localStorage.getItem('id');        
    });
    document.getElementById("Administrativo").innerHTML = "Panel de control de " + adminLogueado.nombre;
    }

window.onload = inicioS();