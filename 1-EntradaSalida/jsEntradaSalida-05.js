/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//let nombreIngresado;
	//let edadIngresada;

	//nombreIngresado=document.getElementById('txtIdNombre').value;
	//edadIngresada=document.getElementById('txtIdEdad').value;

	//V1

	//alert("Usted se llama "+nombreIngresado+ " y tiene "+edadIngresada+" años");

	//V2

	//mensaje="Usted se llama "+nombreIngresado+ " y tiene "+edadIngresada+" años";

	//alert(mensaje);

	//V3

	//mensaje="Usted se llama "+nombreIngresado;
	//mensaje=mensaje+ " y tiene "+edadIngresada;
	//mensaje=mensaje+ " años";

	//alert(mensaje);

	//alert("ok");

	/*
	ejercicio 05 bis
	Debemos lograr tomar nombre, apellido (este por prompt) y edad por ID y mostrarlos concatenados 
	ej.: "Usted se llama José,perez  y tiene 66 años" 	*/

	let nombreIngresado;
	let edadIngresada;

	nombreIngresado=document.getElementById('txtIdNombre').value;
	let apellidoIngresado = prompt("Ingrese su apellido ");
	edadIngresada=document.getElementById('txtIdEdad').value;

	mensaje= "Usted se llama "+nombreIngresado+ ", " +apellidoIngresado+" y tiene " +edadIngresada+" años";

	alert(mensaje);

}

