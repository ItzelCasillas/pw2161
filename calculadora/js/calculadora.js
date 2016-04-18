//variable global
var operador = "";

function igual()
{
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
}

function numeros(num)
{
	
	if(operador == "") //escribi en el operando1
	{
		var valor = document.calculadora.operando1.value;
		if(valor == "0") //vaciamos la caja
			document.calculadora.operando1.value = "";
		//concatenar los valores de num con los de operando1
		document.calculadora.operando1.value = 
		document.calculadora.operando1.value + num;
	}
	else //entonces escribir en el operando2
	{
		var valor = document.calculadora.operando2.value;
		if(valor == "0") //vaciamos la caja
			document.calculadora.operando2.value = "";
		//concatenar los valores de num con los de operando1
		document.calculadora.operando2.value = 
		document.calculadora.operando2.value + num;
	}
}

function operadores(ope)
{
	operador = ope;
}

function borrar()
{
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}