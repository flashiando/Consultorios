
var obtenerLS = function (nombreVar) {
    return JSON.parse(localStorage.getItem(nombreVar));
}

var guardarLS = function (nombreVar, contenidoVar) {
    localStorage.setItem(nombreVar, JSON.stringify(contenidoVar))
}


var datosUsers = function (id, userName, password, tipo) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.tipo = tipo;
}


var cargarDatos = function () {
    
    if (localStorage.getItem("Usuarios")) {
        Usuarios = obtenerLS("Usuarios");
    } else {
        Usuarios = [
            new datosUsers('1', 'RobertoR', '123456', 'adm'),
            new datosUsers('2', 'TatiZ', '123456', 'adm'),
            new datosUsers('3', 'CarlaS', '123456', 'prof'),
            new datosUsers('4', 'LeoM', '123456', 'prof'),
            ]
    }
    
   
}


var Usuarios = undefined;





iniciarSesion = function () {
    if (localStorage.getItem("tipo") == 'adm') {
        window.location = 'panel.html';
    }
    if (localStorage.getItem("tipo") == 'prof') {
        window.location = 'panel2.html';
    }

}



//--------------------------------------//
var obtenerDatos = function () {
    logIn(document.getElementById("loginUser").value, document.getElementById("loginPassword").value);
    ;
}



var UserLogueado = undefined;

var logIn = function (username, password) {

    //Revisar en Usuarios si existe el username
    UserLogueado = Usuarios.find(function (element) { return element.userName === username; })

    //Si existe verificar password e ingresar
    if ((UserLogueado != undefined) && UserLogueado.password == password) {
        console.log('Has Ingresado');
        localStorage.setItem("id", UserLogueado.id);
        localStorage.setItem("tipo", UserLogueado.tipo);
        iniciarSesion();


    } else {
        alert('Por favor verifique los datos ingresados')
    }
}




window.onload = cargarDatos();


//JSON.stringify()
//JSON.parse()


