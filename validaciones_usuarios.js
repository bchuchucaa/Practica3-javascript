
function validarCamposObligatorios()

{
	var bandera=true;
	for (var i =0; i < document.forms[0].elements.length; i++) {
		var elemento = document.forms[0].elements[i];
		if(elemento.value =="" && elemento.type=='text'){
			if(elemento.id =='cedula'){
				document.getElementById('mensajeCedula').innerHTML='<br>la cedula esta vacia';
			}
			else if(elemento.id =='nombres'){
				document.getElementById('mensajeNombres').innerHTML='<br>No ah ingresado los nombres';
			}else if(elemento.id == 'apellidos'){
				document.getElementById('mensajeApellidos').innerHTML='<br>No ah ingresado los apellidos';
			}else if(elemento.id == 'fecha_nac'){
				document.getElementById('mensajeFecha').innerHTML='<br>Fecha no ingresada';
			}else if(elemento.id == 'direccion'){
				document.getElementById('mensajeDireccion').innerHTML='<br>Fecha no ingresada';
			}else if(elemento.id == 'correo'){
				document.getElementById('mensajeCorreo').innerHTML='<br>Correo no ingresado';
			}else if(elemento.id == 'password'){
				document.getElementById('mensajePassword').innerHTML='<br>Contrasena no ingresada';
			}else if(elemento.id == 'telefonos'){
				document.getElementById('mensajeTelefono').innerHTML='<br>Telefono no ingresado';
			}
			elemento.style.border ='1px red solid';
			elemento.className='error';
			bandera=false;
		}
	}
	if(!bandera){
		alert('Error revisa los comentarios');
		return false;
	}else{
		if(validarCedula()==false){
			alert('datos ingresados incorrectamente');

			return false;
		}else if (validar_clave()==false){
			alert('La contrasena no cumple los requisitos')
			return false;
		}else if(validarEmail()==false){
			
			alert('correo no valido');
			return false;
		}else if(numerotelefono()==false){
			alert('telefono invalido');
			return false;

		}else if(validar()==false){
			alert(' fecha invalida');
			return false;
		}else if(validar_clave()==false){
			alert('clave invalida');
			return false;
		}else{	
			alert('Registro exitoso');
			return true;
		}

	}

}


function soloNumeros(e)
{
	var key = window.Event ? e.which : e.keyCode
	return ((key >= 48 && key <= 57) || (key==8))
	
}



function soloLetras(e){
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
	especiales = "8-37-39-46";

	tecla_especial = false
	for(var i in especiales){
		if(key == especiales[i]){
			tecla_especial = true;
			break;
		}
	}

	if(letras.indexOf(tecla)==-1 && !tecla_especial){
		return false;
	}
}
function validarTelefono(elemento){
	if (elemento.value.length <11) {
		return false;
	}else{
		elemento.value=elemento.value.substring(0,elemento.value.length-1);
	}

}
function numerotelefono(){
	if(document.getElementById('telefonos').value.length <9 ){
		alert("Error: telefono" + " es invalida");
		  document.getElementById('telefonos').style.border='1px red solid';
      document.getElementById('mensajeTelefono').innerHTML='<br>telefono invalido';
      return false;
	}
}


function validar(){
	let input = document.getElementById('fecha_nac').value;
	var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
	if (input.match(reg)) {
		console.log("formato correcto de la fecha");
	}else {
		console.log("Please enter dd/mm/yyyy");
		alert('Fecha ingresada incorrectamente');
		  document.getElementById('fecha_nac').style.border='1px red solid';
      document.getElementById('mensajeFecha').innerHTML='<br> Formato invalido';
      return false;
	}
}


function validarCedula() {
  console.log();
  var cad = document.getElementById("cedula").value.trim();
  var total = 0;
  var longitud = cad.length;
  var longcheck = longitud - 1;

  if (cad !== "" && longitud === 10) {
    for (i = 0; i < longcheck; i++) {
      if (i % 2 === 0) {
        var aux = cad.charAt(i) * 2;
        if (aux > 9) aux -= 9;
        total += aux;
      } else {
        total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
      }
    }

    total = total % 10 ? 10 - total % 10 : 0;

    if (cad.charAt(longitud - 1) == total) {
      console.log("La cedula" + " es valida");

    } else {
      alert("Error: La cedula" + " es invalida");
      document.getElementById('cedula').style.border='1px red solid';
      document.getElementById('mensajeCedula').innerHTML='<br> la cedula invalida';
      return false;

    }
  }
}

function validarEmail(){
	var cadena = document.getElementById('correo').value,
    separador = "@", // un espacio en blanco
    arregloDeSubCadenas = cadena.split(separador);
    if((arregloDeSubCadenas[1]==='est.ups.edu.ec' || arregloDeSubCadenas[1]==='ups.edu.ec') && arregloDeSubCadenas[0].length > 2  ){
    	console.log('correo valido');
    	return true;
    	
    }else{
    	  document.getElementById('correo').style.border='1px red solid';
    	  document.getElementById('mensajeCorreo').innerHTML='<br>correo invalido';
    	console.log('correo invalido');
    	return false;
    }

    console.log(arregloDeSubCadenas);
}



function validar_clave()
{
	let contrasenna= document.getElementById('password').value;
	console.log(contrasenna)
	
	if(contrasenna.length > 7)
	{		
		var mayuscula = false;
		var minuscula = false;
		var numero = false;
		var caracter_raro = false;

		for(var i = 0;i<contrasenna.length;i++)
		{
			if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
			{
				mayuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
			{
				minuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
			{
				numero = true;
			}
			else
			{
				caracter_raro = true;
			}
		}
		if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
		{
			
			return true;
		}
	}
	  document.getElementById('password').style.border='1px red solid';
	document.getElementById('mensajePassword').innerHTML='<br>Contrasena invalida';
	console.log('Clave no cumple con los requisitos');
	return false;
	
}

