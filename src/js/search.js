/*Localstorage que devuelve los datos de home*/
$(document).ready(function(){
	var fechauno=localStorage.getItem("fecha-llegada");
	$(".llegada-home").val(fechauno);
	var fechados=localStorage.getItem("fecha-salida");
	$(".salida-home").val(fechados);
	var huesped=localStorage.getItem("num-huesped");
	$(".huesped-home").val(huesped);
});