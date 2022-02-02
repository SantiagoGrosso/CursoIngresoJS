/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNúmeroIngresado;
	let segundoNúmeroIngresado;
	let resultado;

	primerNúmeroIngresado=document.getElementById('txtIdNumeroUno').value;
	segundoNúmeroIngresado=document.getElementById('txtIdNumeroDos').value;

	primerNúmeroIngresado=parseInt(primerNúmeroIngresado);
	segundoNúmeroIngresado=parseInt(segundoNúmeroIngresado);

	resultado= (primerNúmeroIngresado) + (segundoNúmeroIngresado);


	//resultado= parseInt	(primerNúmeroIngresado) + parseInt (segundoNúmeroIngresado);

	alert (resultado);

	//alert("ok");
}

