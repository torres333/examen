window.onload = function () {
	//abrir instrucciones
	document.getElementById("instrucciones").onclick = function() {
		document.getElementById("instruccionestexto").style.display = "block";
		document.getElementById("acercatexto").style.display = "none";
	};
	//cerrar instrucciones
	document.getElementById("ocultarinstrucciones").onclick = function() {
		document.getElementById("instruccionestexto").style.display = "none";
		document.getElementById("acercatexto").style.display = "none";
	};
	//abrir acerca de
	document.getElementById("acercade").onclick = function() {
		document.getElementById("acercadetexto").style.display = "block";
		document.getElementById("instruccionestexto").style.display = "none";
	};
	//ocultar acerca de
	document.getElementById("ocultaracercade").onclick = function() {
		document.getElementById("acercadetexto").style.display = "none";
		document.getElementById("instruccionestexto").style.display = "none";
	}
}