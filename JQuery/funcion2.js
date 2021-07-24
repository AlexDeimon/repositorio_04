let x= $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
	let x = $("#boton1");
	x.click(ocultarItem);
	let y = $("#boton2");
	y.click(mostrarItem);
	let z = $("#boton3");
	z.click(borrarItem);
}
function ocultarItem() {
	let x = $("#lista1");
	x.hide();
}
function mostrarItem() {
	let y = $("#lista1");
	y.show();
}
function borrarItem() {
	let z = $("#lista2");
	z.remove();
}