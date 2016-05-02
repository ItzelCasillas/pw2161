// jquery(etiquetas,clases,id)
// $ alias (un sobrenombre)
// $ == jquery

var inicio = function()
{
	var clickBoton = function()
	{
		console.log("Click del botón");
		$(".anuncioWeb").html("Clic del Botón");
		$(".anuncioWeb").append("Clic del Botón");
	}

	var clicBoton2 = function()
	{
		alert("botón 2");
	}

	var teclaUnInput = function(tecla)
	{
		if(tecla.which == 13)
		{
			//que se posicione en otroInput
			$("#otroInput").focus();
		}
	}
	//preparar los eventos de todos mis objetos
	$("#miBoton").off("click",clickBoton);
	$("#miBoton").on("click",clicBoton2);
	$("#unInput").on("keypress",teclaUnInput);
}
//Main
$(document).on("ready",inicio);