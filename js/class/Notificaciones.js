import { formulario } from "../selectores.js";

export default class Notificacion {
	constructor({ text, tipo }) {
		this.text = text;
		this.tipo = tipo;

		this.mostrar();
	}

	mostrar() {
		//Crear la notifiacion
		const alerta = document.createElement("DIV");
		alerta.classList.add(
			"text-center",
			"w-full",
			"p-3",
			"text-white",
			"my-5",
			"alert",
			"uppercase",
			"font-bold",
			"text-sm"
		);

		// Eliminar alartas duplicadas
		const alertaPrevia = document.querySelector(".alert");
		alertaPrevia?.remove();

		// Si es de tipo erro, agregamos una clase
		this.tipo === "error"
			? alerta.classList.add("bg-red-500")
			: alerta.classList.add("bg-green-500");

		// Msj de error
		alerta.textContent = this.text;

		// Insertar en el DOM
		formulario.parentElement.insertBefore(alerta, formulario);

		// Eliminar la notificación después de 3 segundos (3000 ms)
		setTimeout(() => {
			alerta.remove(); // Elimina el elemento del DOM
		}, 3000);
	}
}
