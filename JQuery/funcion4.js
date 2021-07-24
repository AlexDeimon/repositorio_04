let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
	let x = $("#boton1");
	x.click(extraerTexto);
	let y = $("#boton2");
	y.click(modificarTexto);
	let z = $("#boton3");
	z.click(mTextoT);
}
function extraerTexto() {
	let x = $("#parrafo");
	alert(x.text());
}
function modificarTexto() {
	let y = $("#parrafo");
	y.text("Nuevo parrafo...");
}
function mTextoT() {
	let z = $("td");
	z.text("Nuevo texto...");
}