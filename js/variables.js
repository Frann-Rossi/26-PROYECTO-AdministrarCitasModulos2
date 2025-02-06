import { generarId } from "./funciones.js";

let editando = { value: false };

// Obj de Cita
const citaObj = {
	id: generarId(),
	paciente: "",
	propietario: "",
	email: "",
	fecha: "",
	sintomas: "",
};

export { citaObj, editando };
