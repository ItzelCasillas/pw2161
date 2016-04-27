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
	//preparar los eventos de todos mis objetos
	$("#miBoton").on("click",clickBoton);
}
//Main
$(document).on("ready",inicio);