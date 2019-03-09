//Usuario sera el objeto padre de las instancias "Administrativo" y "Profesional" y
// contendra los datos en comun entre estos.
var Usuario = function (id, username, password, tipo, nombre, apellido) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.tipo = tipo;
    this.nombre = nombre;
    this.apellido = apellido;
}

// heredo el prototipo de usuario para los distintos tipo :    


var Administrativo = function (id, username, password, tipo, nombre, apellido) {
    Usuario.call(this, id, username, password, tipo, nombre, apellido);    
}
Administrativo.prototype = Object.create(Usuario.prototype);
Administrativo.prototype.constructor = Administrativo;



var Profesional = function (id, username, password, tipo, nombre, apellido, especialidad,obraSocial,estadoDeCuenta) {
    Usuario.call(this, id, username, password, tipo, nombre, apellido);
    this.especialidad = especialidad;
    this.obraSocial = obraSocial;
    this.estadoDeCuenta = estadoDeCuenta;
}
Profesional.prototype = Object.create(Usuario.prototype);
Profesional.prototype.constructor = Profesional;

//Usuarios demo pre cargados

var Usuarios = {
    administrativos: [
        new Administrativo('a1', 'RubenR', '123456', 'adm', 'Ruben', 'Rodriguez'),
        new Administrativo('a2', 'JuanaS', '123456', 'adm', 'Juana', 'Samudio'),
        new Administrativo('a3', 'LuciaL', '123456', 'adm', 'Lucia', 'Lopez'),
    ],
    profesionales: [
        new Profesional('p1', 'CarlosM', '123456', 'prof', 'Carlos', 'Martinez'),
        new Profesional('p2', 'FrancoA', '123456', 'prof', 'Franco', 'Alternador'),
        new Profesional('p3', 'DanielU', '123456', 'prof', 'Daniel', 'Uliseo'),
        new Profesional('p4', 'VivianaZ', '123456', 'prof', 'Viviana', 'Zorro'),
    ],
}



//funcion para loguearse en el sitio
var encontrado = undefined;


var obtenerDatos = function () {
        alert(logIn(document.getElementById("loginUser").value,document.getElementById("loginPassword").value));
        if (encontrado != undefined ) {
            //window.location="http://127.0.0.1:5500/panel.html"
        console.log(encontrado.tipo) 
        }
        
;}



var logIn = function (username, password) {
    //1- Buscar el username en la lista de usuarios
     encontrado = Usuarios.administrativos.find(function (element) {
        return element.username === username;
    });
    
    if (encontrado === undefined) {
        encontrado = Usuarios.profesionales.find(function (element) {
            return element.username === username;
        });
    }
    
    if (encontrado != undefined) {
        if (encontrado.password === password) {
            return 'Hola ' + encontrado.nombre + " " + encontrado.apellido + ' te has logueado correctamente'
        } else {
            return 'Password o usuario incorrecto, verifique sus datos por favor'
        }
    } else {
        return 'Password o usuario incorrecto, verifique sus datos por favor'
    }
}



