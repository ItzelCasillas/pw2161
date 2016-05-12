var iniciaApp = function()
{
	var ValidarEntrada = function()
	{
		event.preventDefault(); //invalida los eventos que no corresponden a esta función
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//validaciones
		//1. que no sean vacíos
		if(usuario =="")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave =="")
		{
			alert("La clave no debe ser vacío");
			$("#txtClave").focus();
		}
		//2. verificar usuario y contraseña
		var parametros = "accion=ValidarEntrada"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random(); //para que ajax no utilice el cache
		$.ajax({
			beforeSend:function(){
				console.log("Validar al ususario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){

			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",ValidarEntrada);
}
$(document).on("ready",iniciaApp);