function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _rut = rut;
  let _edad = edad;
  let _diagnostico = diagnostico;

  Object.defineProperty(this, "_nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_edad", {
    get: function () {
      return _edad;
    },
    set: function (edad) {
      _edad = edad;
    },
  });

  Object.defineProperty(this, "_rut", {
    get: function () {
      return _rut;
    },
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

Paciente.prototype.getName = function () {
  return this._nombre;
};

Paciente.prototype.setNombre = function (nombre) {
  this._nombre = nombre;
};

Paciente.prototype.getEdad = function () {
  return this._edad;
};

Paciente.prototype.setEdad = function (edad) {
  this._edad = edad;
};

Paciente.prototype.getRut = function () {
  return this._rut;
};

Paciente.prototype.setRut = function (rut) {
  this._rut = rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this._diagnostico;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._diagnostico = diagnostico;
};

Consultorio.prototype.getPacienteByName = function (nombre) {
  return this.pacientes.find((p) => p.getName() == nombre);
};

Consultorio.prototype.imprimirPacientes = function () {
  this.pacientes.forEach((paciente) => {
    console.log(`${paciente.getName()}`);
  });
};

const p1 = new Paciente("Raul", 174323452, 26, "Dolor de codo");
const p2 = new Paciente("Juan", 136523452, 26, "Sed");
const p3 = new Paciente("Pablo", 154327892, 26, "Hambre");
const p4 = new Paciente("Jorge", 234523452, 26, "Frio");
const p5 = new Paciente("Ana", 234334323, 26, "Miedo");

const pacientes = [p1, p2, p3, p4, p5];

const consultorio = new Consultorio("Posta", pacientes);

console.log(
  "Diagnostico: ",
  consultorio.getPacienteByName("Pablo").getDiagnostico()
);

consultorio.imprimirPacientes();
