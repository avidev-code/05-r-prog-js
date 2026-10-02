var bloquesRojos = true;
var bloquesRojos = 5; // You can reassign the value using var.

console.log(bloquesRojos); // Output: 5

// Using let and const - 2015
let contador = 0;
let mensaje = 'Hola';
contador = 10; // You can reassign the value using let.

const PI = 3.14159;
PI = 4; // This will throw an error because 'PI' is a constant and cannot be reassigned.

let bloquesVerdes = true; //ecmascript 6
// let bloquesVerdes = 5; // This will throw an error because 'bloquesVerdes' has already been declared

// Hoisting
console.log(nombre); // Output: undefined
var nombre = 'Juan';