//variables globales

var turno = false;
var letraCasilla = "";
var cuentaJuego = 0;
var cuentaJugadas = 0;

function iniociaGato()
{
	//En construcción
}

function validaJugada(letra)
{
	var ganador = false;
	var b11 = document.getEElementById("unouno").innerHTML;
	var b12 = document.getEElementById("unouno").innerHTML;
	var b13 = document.getEElementById("unouno").innerHTML;
	var b21 = document.getEElementById("unouno").innerHTML;
	var b22 = document.getEElementById("unouno").innerHTML;
	var b23 = document.getEElementById("unouno").innerHTML;
	var b31 = document.getEElementById("unouno").innerHTML;
	var b32 = document.getEElementById("unouno").innerHTML;
	var b33 = document.getEElementById("unouno").innerHTML;
	//jugadas
	if(b11==b12 && b12==b13 && b11!="&nbsp;")
	ganador = true;
	if(b21==b22 && b22==b23 && b21!="&nbsp;")
	ganador = true;
	if(b31==b32 && b33==b33 && b31!="&nbsp;")
	ganador = true;
	if(b11==b22 && b21==b31 && b11!="&nbsp;")
	ganador = true;
	if(b12==b22 && b22==b32 && b12!="&nbsp;")
	ganador = true;
	if(b13==b23 && b23==b33 && b13!="&nbsp;")
	ganador = true;
	if(b11==b22 && b22==b33 && b11!="&nbsp;")
	ganador = true;
	if(b13==b22 && b22==b31 && b13!="&nbsp;")
	ganador = true;

	//Alguien ganó?

	if(ganador == true)
		{
			alert("!Ganador¡"+letra);
		}
		else if(ganador==false &&cuentaJugadas == 9)
			{
				alert("!Empate¡");
			}
}

function escribe(casilla)
{
	var letra = "";
	letraCasilla = document.getElementById(casilla).innerHTML;
	//if(letracasilla == "&nbsp;")
	if(letraCasilla !="x" && letraCasilla !="O")
	{
		if(turno == false) //if(!turno)
			letra = "X";
		else 
			letra = "O";
		document.getElementById(casilla).innerHTML = letra;

		truno = !turno; //turno = true;
	}
	cuentaJugadas = cuentaJugadas + 1;
	//para saber quien ganó, validamos la jugada

	validaJugada(letra);
}
