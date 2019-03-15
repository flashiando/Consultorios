
var administrativo = function (id, Nombre, Apellido, ) {
    this.id = id;
    this.nombre = Nombre;
    this.apellido = Apellido;
}



var Admins = [
    new administrativo('001','Roberto','Html'),
    new administrativo('002','Tatiana','Zamudio'),
]

var adminLogueado = undefined; // inicioS() guardara aqui el objeto que representa al Admin logueado.

var inicioS = function () {       
    adminLogueado = Admins.find(function (element) {
        return element.id == localStorage.getItem('id');        
    });
    document.getElementById("Administrativo").innerHTML = "Panel de control de " + adminLogueado.nombre;
    }

window.onload = inicioS();