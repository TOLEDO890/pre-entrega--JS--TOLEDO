console.log("conectado");
let nombrePerro = prompt("ingresa el nombre de tu perro");
while (!/^[A-Za-z]+$/.test(nombrePerro) || nombrePerro.trim() === "") {
  alert(
    "Por favor, ingresa un nombre válido que contenga solo letras y no esté vacío."
  );
  nombrePerro = prompt("Ingresa el nombre de tu perro nuevamente");
}
console.log("bienvenido dueño de" + " " + nombrePerro)
alert("bienvenido dueño de" + " " + nombrePerro);
let añosHumanos = parseInt(prompt("Ingresa la edad de " + nombrePerro));
while (true) {
  if (isNaN(añosHumanos)) {
    alert("Por favor, ingresa solo números.");
    añosHumanos = parseInt(prompt("Ingresa la edad de " + nombrePerro));
  } else if (parseInt(añosHumanos) <= 0) {
    alert("Por favor, ingresa un número mayor que cero.");
    añosHumanos = parseInt(prompt("Ingresa la edad de " + nombrePerro));
  } else {
    alert("La edad humana de " + nombrePerro + " es " + añosHumanos);
    console.log("La edad humana de " + nombrePerro + " es " + añosHumanos);
    break;
  }
}
function multiplicar(a, b) {
  return a * b;
}
let añosPerros = 7;
let resultado = multiplicar(añosHumanos, añosPerros);
console.log(
  "la edad real de " + " " + nombrePerro + " " + "es" + " " + resultado
);
alert("la edad real de " + " " + nombrePerro + " " + "es" + " " + resultado);
alert("gracias por visitar nuestro sitio web");
