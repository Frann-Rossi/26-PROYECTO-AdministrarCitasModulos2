import AdminCitas from "./class/AdminCitas.js";
import Notificacion from "./class/Notificaciones.js";
import {
	emailInput,
	fechaInput,
	formulario,
	formularioInput,
	pacienteInput,
	propietarioInput,
	sintomasInput,
} from "./selectores.js";
import { citaObj, editando } from "./variables.js";

const citas = new AdminCitas();

export function datosCitas(e) {
	citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
	e.preventDefault();

	if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
		new Notificacion({
			text: "Todos los campos son obligatorios",
			tipo: "error",
		});
		return;
	}

	if (editando.value) {
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
	editando.value = false;
}

export function reinciarObjetoCita() {
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

export function generarId() {
	return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
	Object.assign(citaObj, cita);

	pacienteInput.value = cita.paciente;
	propietarioInput.value = cita.propietario;
	emailInput.value = cita.email;
	fechaInput.value = cita.fecha;
	sintomasInput.value = cita.sintomas;

	editando.value = true;

	formularioInput.value = "Guardar Cambios";
}
