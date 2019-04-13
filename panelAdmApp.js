
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
    if (validarDatos(nombre, apellido, username) && (validarDatos(username, password, "undefined"))) {
        crearProfesional(username, password, nombre, apellido, especialidad, obrasocial, estadodecuenta)
    } else { alert("Verificar datos ingresados") }

}

//Validar datos. nombre y apellido > 1 caracter.   + Usuario que no se repita  + validar password

var validarDatos = function (nombre, apellido, username) {
    if ((nombre.length > 0) && (apellido.length > 0) && (validarUsername(username) == true)) {
        return true
    }
}

var validarUsername = function (username) {
    var UN = Usuarios.find(function (element) { return element.userName === username });
    if (UN == undefined) {
        return true
    } else { alert('El Username ya existe. Por favor intente nuevamente.') }
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
    
    /*fetch('http://127.0.0.1:8080/obtenerUsuarios')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson); 
        });*/

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
    var newText3 = document.createTextNode(especialidad);


    //Añade y configura el boton Ver    
    var botonVer = document.createElement("button");
    botonVer.innerHTML = 'Ver';
    botonVer.setAttribute('class', "btn btn-outline-secondary btn-sm py-0");
    botonVer.setAttribute('data-toggle', "modal");
    botonVer.setAttribute('data-target', '#modalProfesionalesXL');
    var x = 'mostrarEnModal(' + profID + ')'
    botonVer.setAttribute('onclick', x);

    //Añade y configura el boton Editar    
    var botonEditar = document.createElement("button");
    botonEditar.innerHTML = 'Editar';
    botonEditar.setAttribute('class', "btn btn-outline-secondary btn-sm py-0");
    botonEditar.setAttribute('data-toggle', "modal");
    botonEditar.setAttribute('data-target', '#modalProfesionalesXL');
    var y = 'mostrarEnModal(' + profID + ');funcionBotonProfesionales()'
    botonEditar.setAttribute('onclick', y);


    //Inserta en el html los objetos creados.
    newCell1.appendChild(newText1);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(botonVer);
    newCell4.appendChild(botonEditar);

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



// Cargar del usuario en cuestion en el modal. Al apretar el boton de ver

/*funcion mostrarEnModar (id)
1-Reconocer la instancia dfel profesional. encontrar el this
1-completar el modal llamando a los datos necesarios. 
hacerla funcional solo para profesionales.. luego para todo. 
*/

var mostrarEnModal = function (idProf) {
    var profSelec = Profesionales.find(function (element) {
        return element.id == idProf;
    });
    var usuarioSelec = Usuarios.find(function (element) {
        return element.id == idProf;
    });
    //Parte 1 -selecciona los campos a modificar del html- 

    var idUser = document.getElementById("disModal1");
    var username = document.getElementById("disModal6");
    var password = document.getElementById("disModal7");
    var nombre = document.getElementById("disModal2");
    var apellido = document.getElementById("disModal3");
    var especialidad = document.getElementById("especialidad");
    var obrasocial = document.getElementById("obraSocial");
    var estadodecuenta = document.getElementById("disabledSelect");

    //Parte 2 -Carga los datos correspondientes en el html 
    if (idProf == 'vacio') {
        idUser.setAttribute('placeholder', '');
        username.setAttribute('placeholder', '');
        password.setAttribute('placeholder', '');
        nombre.setAttribute('placeholder', '');
        apellido.setAttribute('placeholder', '');;
        especialidad.setAttribute('placeholder', '');
        obrasocial.setAttribute('placeholder', '');
        estadodecuenta.setAttribute('placeholder', '');

    } else {
        idUser.setAttribute('placeholder', usuarioSelec.id);
        username.setAttribute('placeholder', usuarioSelec.userName);
        password.setAttribute('placeholder', usuarioSelec.password);
        nombre.setAttribute('placeholder', profSelec.nombre);
        apellido.setAttribute('placeholder', profSelec.apellido);;
        especialidad.setAttribute('placeholder', profSelec.especialidad);
        obrasocial.setAttribute('placeholder', profSelec.obrasocial);
        estadodecuenta.setAttribute('placeholder', profSelec.estadodecuenta);
        console.log(profSelec);
        console.log(usuarioSelec);
    }

}












window.onload = inicioS();