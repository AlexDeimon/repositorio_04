function retornarfecha() {
	var fecha;
	fecha=new Date();
	var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear();
	return cadena;
}

function retornarhora() {
	var hora;
	hora=new Date();
	var cadena1=hora.getHours()+':'+hora.getMinutes()+':'+hora.getSeconds();
	return cadena1;
}