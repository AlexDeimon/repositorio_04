let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
	let x = $("#ventana");
	x.dblclick(dobleclick);
}
function dobleclick() {
	let x = $(this);
	x.hide();
}