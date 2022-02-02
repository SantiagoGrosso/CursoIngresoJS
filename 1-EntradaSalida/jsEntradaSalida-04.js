/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let NombreIngresado;
	NombreIngresado=prompt("ingresa tu nombre");
	document.getElementById('txtIdNombre').value="Su nombre es "+NombreIngresado;

}

