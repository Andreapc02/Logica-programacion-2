
let celsius = prompt("Ingresa la temperatura en grados Celsius: ");

/* Identificar si los datos de entrada sean de tipo number, en caso 
contrario debe mandar un mensaje de error y volver a solicitar los datos.*/

//isNaN sirve para saber si un valor NO es un número

while (isNaN(celsius)) {
    alert("Solo debe de ingresar numeros");
    celsius = prompt("Ingresa la temperatura en grados Celsius: ");
}


celsius = Number(celsius);

// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);