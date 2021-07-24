let x = $(document);
x.ready(inicializarEventos);
function inicializarEventos() {
	let x = $("a");
	x.mouseover(entrarMouse);
	x.mouseout(salirMouse);
}
function entrarMouse() {
	$(this).css("background-color","#ff0");
}
function salirMouse() {
	$(this).css("background-color","#fff");
}
