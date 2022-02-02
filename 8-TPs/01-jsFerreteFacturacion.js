/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{

	let primerNúmeroIngresado;
	let segundoNúmeroIngresado;
	let tercerNúmeroIngresado;
	let resultado;

	primerNúmeroIngresado=document.getElementById('txtIdPrecioUno').value;
	segundoNúmeroIngresado=document.getElementById('txtIdPrecioDos').value;
	tercerNúmeroIngresado=document.getElementById('txtIdPrecioTres').value;

	primerNúmeroIngresado=parseInt(primerNúmeroIngresado);
	segundoNúmeroIngresado=parseInt(segundoNúmeroIngresado);
	tercerNúmeroIngresado=parseInt(tercerNúmeroIngresado);

	resultado= (primerNúmeroIngresado) + (segundoNúmeroIngresado) + (tercerNúmeroIngresado);

	alert (resultado);



}

function Promedio () 

{

	let segundoResultado;

	primerNúmeroIngresado=document.getElementById('txtIdPrecioUno').value;
	segundoNúmeroIngresado=document.getElementById('txtIdPrecioDos').value;
	tercerNúmeroIngresado=document.getElementById('txtIdPrecioTres').value;

	primerNúmeroIngresado=parseInt(primerNúmeroIngresado);
	segundoNúmeroIngresado=parseInt(segundoNúmeroIngresado);
	tercerNúmeroIngresado=parseInt(tercerNúmeroIngresado);


	resultado= (primerNúmeroIngresado) + (segundoNúmeroIngresado) + (tercerNúmeroIngresado);
	segundoResultado= (resultado) / "3";


	alert (segundoResultado);

}

function PrecioFinal () 

{	

	let tercerResultado;

	primerNúmeroIngresado=document.getElementById('txtIdPrecioUno').value;
	segundoNúmeroIngresado=document.getElementById('txtIdPrecioDos').value;
	tercerNúmeroIngresado=document.getElementById('txtIdPrecioTres').value;

	primerNúmeroIngresado=parseInt(primerNúmeroIngresado);
	segundoNúmeroIngresado=parseInt(segundoNúmeroIngresado);
	tercerNúmeroIngresado=parseInt(tercerNúmeroIngresado);

	resultado= (primerNúmeroIngresado) + (segundoNúmeroIngresado) + (tercerNúmeroIngresado);
	segundoResultado=(resultado) * "21" / "100";
	tercerResultado= (resultado) + (segundoResultado);


	alert (tercerResultado);

}