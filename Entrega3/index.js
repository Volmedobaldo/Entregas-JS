
//ENTREGA 3 Y PRIMER ENTREGA DEL PROYECTO FINAL

// Declaro un array vacio para ir guardando en una lista con todas las garantias ingresadas por el usuario

const listaGarantias = [];

// Primer paso es preguntarle al usuario si desea calcular el seguro, si  lo decide, a traves de un prompt le voy a ir solicitando datos a medida que avanzamos. Si dice no, se termina la interaccion.

let seguroCaucion = prompt("¿Desea calcular el seguro de caución de su alquiler?SI/NO");
seguroCaucion = seguroCaucion.toUpperCase();
if (seguroCaucion == "SI") {

    let precioAlquiler = parseFloat(prompt("Ingresa el precio inicial de su alquiler"));
    let tasaExpensas = parseFloat(prompt("Ingresa el precio de las expensas"));
    let cantidadAños = parseFloat(prompt("Ingrese la cantidad de años"))

    // concateno los datos solicitados en una sola variable para poder dar el resultado final. 

    let precioGarantía = ((precioAlquiler + tasaExpensas) * cantidadAños);
    console.log(precioGarantía);
    console.log("La garantía vale " + precioGarantía);
    alert("El precio del seguro de caución es: $ " + precioGarantía);

    // creo una variable arrayGarantia que me permite redefinir listaGarantias con la garantia agregada a traves del push y lo muestra en la consola

    let arrayGarantia = listaGarantias.push(precioGarantía);
    console.log("listaGarantias", listaGarantias);

    // una vez dicho el precio del seguro defino variable financiacion para comenzar otro IF segun lo que decida el usuario
    let financiacion = prompt("¿Desea financiar en cuotas el seguro de caución?SI/NO");
    financiacion = financiacion.toLocaleUpperCase();
    if (financiacion == "SI") {

        let cantidadCuotas = parseFloat(prompt("Por favor escriba a continuacion la cantidad de cuotas del 1-6?"))


        // defino nuevas variables y concateno precioCuotas
        let precioAdelanto = (precioGarantía * 0.15);
        let precioCuotas = ((precioGarantía - precioAdelanto) / cantidadCuotas);
        console.log(precioAdelanto);
        console.log("El valor del adelanto es:");
        alert("El adelanto para obtener su seguro de caucion es de $" + precioAdelanto + " y tendrá que abonar " + cantidadCuotas + " cuotas de $" + precioCuotas.toFixed(2));

        //le informo al usuario el valor del adelanto y el valor de cada una de las cuotas a traves de un Prompt. Agregue toFixed para que el valor de las cuotas solo muestre dos decimales nada mas. 

    } else if (financiacion == "NO") {
        alert("Si desea venir a nuestras oficinas lo esperamos de lunes a viernes de 9-18hs en Avenida Centenrio 2000")

    }

    // Si el usuario no desea financiacion, te termina la iteracion con este prompt
} else if (seguroCaucion == "NO") {
    alert("Hasta pronto!")
}


// Para la proxima entrega voy a convertir en objeto la informacion que le solicito al usuario para que dentro del array me quede vaya quedando [{Direccion de la propiedad,el precio de la garantia},{},{},...] identificando cada garantia con un ID (Direccion)





