// Strings

const Nombre = 'JavaScript';
const version = 'ES6';

//console.log(Nombre, version);

// const mensaje = 'Bienvenido a ' + Nombre + ' ' + version;
//console.log(mensaje);

// Template literals

const mensaje2 = `Bienvenido y Bienvenida al curso de ${Nombre}, en su versión ${version}`;
console.log(mensaje2);

// Expreisones

const precio = 100;
const cantidad = 3;
const total = `El total a pagar es: ${precio * cantidad}`;
console.log(typeof total); // Tiene que ver con la coersion

// Multilinea

const nota =`
# Este el titulo de mi nota
Este es el contenido de mi nota

- Nota 1
- Nota 2

`