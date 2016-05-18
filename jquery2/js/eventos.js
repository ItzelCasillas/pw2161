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
		var parametros = "accion=validarEntrada"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random(); //para que ajax no utilice el cache
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else
				{
					alert("Usuario/contraseña incorrecto(s)");
				}

			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});
		console.log("Se disparó el submit");
	}

	var Altas = function()
	{
		//mostramos el formulario
		$("#altaUsuarios").show("slow");
	}

	var AltaUsuario = function()
	{
		event.preventDefault();
		alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros = "accion=guardaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Guardar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Usuario registrado correctamente");
				}
				else
				{
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajax,thrownError){

			}

		})
	}

	$("#frmValidaEntrada").on("submit",ValidarEntrada);
	$("#btnAltas").on("click",Altas);
	$("#frmAltaUsuarios").on("submit",AltaUsuario);
}
$(document).on("ready",iniciaApp);