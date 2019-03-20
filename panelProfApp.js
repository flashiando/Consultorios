var profesional = function (id, Nombre, Apellido, Especialidad, ObraSocial, EstadoCuenta) {
    this.id = id;
    this.nombre = Nombre;
    this.apellido = Apellido;
    this.especialidad = Especialidad;
    this.ObraSocial = ObraSocial;
    this.EstadoCuenta = EstadoCuenta;
}

var Profesionales = [
    new profesional('3', 'Carla' ,'Segovia','Odontologia','Osecac','activo'),
    new profesional('4','Leo','Montero','Odontologia','Osecac','activo'),
]




var cargarProfesionales = function() {
    if(localStorage.getItem("Profesionales")){
        return obtenerLS("Profesionales")
    } else {
        return [
            new profesional('3', 'Carla' ,'Segovia','Odontologia','Osecac','activo'),
            new profesional('4','Leo','Montero','Odontologia','Osecac','activo'),
        ]
    }
}
var Profesionales = cargarProfesionales();