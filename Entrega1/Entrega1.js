
//ALGORITMO ENTREGA 1 

// BIENVENIDA A LA PAGINA - PRUEBA ROBOT


let Bienvenido = prompt("Por favor compruebe que no es un robot escribiendo")
if(Bienvenido == ""){
    alert("ROBOT DETECTADO")
}
else{
    alert("Bienvenid@ a nuestra pagina")
}


// USUARIO 
let Usuario = prompt("Ingrese su usuario")
if(Usuario == ""){
    alert("No ingreso un usuario")
}
else{
    alert("Muchas gracias")
}


//CODIGO


let codigo = prompt("Ingrese su codigo de entrada")
if(codigo == "1234"){
    alert("El codigo es correcto, BIENVENIDO")
}
else{
    alert("el codigo es incorrecto, por favor reintentelo")
}

// OPERACION 

let operacion = prompt("¿Desea hacer una multiplicacióm?SI/NO");
operacion = operacion.toLocaleUpperCase();
if(operacion == "SI"){

let numero1 = parseFloat(prompt("Ingresa el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));

let Suma12 = numero1 + numero2;
console.log(Suma12);
console.log("El tipo de valor de A es")
alert("El resultado de la suma es: " + Suma12)

}else if(operacion =="NO"){alert("Hasta pronto!")

}

// No se como hacer un alert para que me muestre el resultado de la multiplicacion. O sea seria {alert(Suma12())} pero no se donde ponerlo.
