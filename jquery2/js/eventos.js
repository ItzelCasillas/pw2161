var iniciaApp = function()
{
	var ValidarEntrada = function()
	{
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
		
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",ValidarEntrada);
}
$(document).on("ready",iniciaApp);