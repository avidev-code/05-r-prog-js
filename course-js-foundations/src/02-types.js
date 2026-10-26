// Mejor práctica: Comenzar declarando constantes

// 7 Tipos de datos primitivos

const text = "Juan"; // String
const number = 42; // Number
const isTrue = true; // Boolean
const isFalse = false; // Boolean
const nothing = null; // Null -> Devuelve object - No es un objeto, sino la ausencia de la intención de valor.
const undefinedValue = undefined; // Undefined
const symbol = symbol('id');
const big = 123n;

console.log(typeof text);
console.log(typeof number);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof nothing);
console.log(typeof undefinedValue);
console.log(typeof symbol);
console.log(typeof big);

// Datos Complejos

const objeto = { nombre: 'Juan', edad: 30};
const arreglo = [1,2,3,'string'];
const funcion = function () {};

// Javascript reconoce entre mayúsculas y minúsculas.