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
		if(usuario=="pw" && clave=="1234")
		{
			//alert("Bienvenido"+usuario);
			//dar entrada al usuario
			$("#datosUsuario").hide(); //escondemos
			$("nav").show("slow"); //mostramos
		}
		else
			alert("Usuario y/o contraseña incorrecta(s)");
		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",ValidarEntrada);
}
$(document).on("ready",iniciaApp);