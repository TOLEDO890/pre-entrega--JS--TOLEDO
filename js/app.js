console.log("conectado");
let nombrePerro = prompt("ingresa el nombre de tu perro");
alert ("bienvenido dueño de" + " "  + nombrePerro );
let añosHumanos = parseInt(prompt("Ingresa la edad de " + nombrePerro));
if (añosHumanos === " "){
    alert( "por favor ingresa solo numeros");
}else {
    alert("la edad humana de"+" " +nombrePerro +" "+"es" +" " +añosHumanos);
}
let añosPerros = 7;

function multiplicar(a, b) {
    return a * b;
  }
  
let resultado = multiplicar(añosHumanos, añosPerros);
alert("la edad real de " + " "+nombrePerro +" "+ "es"+ " "+ resultado)

alert("gracias por visitar nuestro sitio web")
   


