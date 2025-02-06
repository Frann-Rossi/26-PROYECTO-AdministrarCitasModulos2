import { AdminCitas } from "./class/AdminCitas";

function datosCitas(e) {
	citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas();

function submitCita(e) {
	e.preventDefault();

	if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
		new Notificacion({
			text: "Todos los campos son obligatorios",
			tipo: "error",
		});
		return;
	}

	if (editando) {
		citas.editar({ ...citaObj });
		new Notificacion({
			text: "Paciente Editado",
			tipo: "exito",
		});
	} else {
		citas.agregar({ ...citaObj });
		new Notificacion({
			text: "Paciente Registrado",
			tipo: "exito",
		});
	}

	formulario.reset();
	reinciarObjetoCita();
	formularioInput.value = "Registrar Paciente";
	editando = false;
}

function reinciarObjetoCita() {
	// Reinciar el obj

	Object.assign(citaObj, {
		id: generarId(),
		paciente: "",
		propietario: "",
		email: "",
		fecha: "",
		sintomas: "",
	});

	// citaObj.id = generarId();
	// citaObj.paciente = "";
	// citaObj.propietario = "";
	// citaObj.email = "";
	// citaObj.fecha = "";
	// citaObj.sintomas = "";
}

function generarId() {
	return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
	Object.assign(citaObj, cita);

	pacienteInput.value = cita.paciente;
	propietarioInput.value = cita.propietario;
	emialInput.value = cita.email;
	fechaInput.value = cita.fecha;
	sintomasInput.value = cita.sintomas;

	editando = true;

	formularioInput.value = "Guardar Cambios";
}

export default {
	datosCitas,
	submitCita,
	reinciarObjetoCita,
	generarId,
	cargarEdicion,
};
