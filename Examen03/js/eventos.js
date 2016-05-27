var iniciaApp = function()
{
var Bajas = function()
	{	
		$("#frmBajaAlmacen").on("submit",baja);
	}


	var baja = function()
	{
		event.preventDefault();
		var datos = "idAlmacen="+$("#idAlmacen").val();
		var parametros = "accion=baja&"+datos+
		                 "&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Baja Almacen");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Almacen dado de baja correctamente");
				}
				else
				{
					alert("No se pudo dar de baja el almacen");
				}
			},
			error: function(xhr,ajax,thrownError){

			}
		});
	}
	$("#btnBajas").on("click",Bajas);
}
$(document).on("ready",iniciaApp);