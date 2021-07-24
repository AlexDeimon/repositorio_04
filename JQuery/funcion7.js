let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
	let x = $("#boton1");
	x.click(Ocultar);
	x = $("#boton2");
	x.click(Mostrar);
}
function Ocultar() {
	let x = $("#texto");
	x.hide("slow");
}
function Mostrar() {
	let x = $("#texto");
	x.show("fast");
}
