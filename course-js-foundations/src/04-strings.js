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

// Métodos principales en Strings

// Length - Devuelve la cantidad de caracteres de un string

const texto = 'Hola mundo';
console.log(texto.length);

//Slice(inicio, fin) Extrae la parte de un string y devuelve un nuevo string

const texto1 = 'Javascript es Genial';
console.log(texto1.slice(0, 10)); //Javascript
console.log(texto1.slice(11)); //Genial
console.log(texto1.slice(-6)); //Genial

//Substring(inicio, fin) Extrae la parte de un string y devuelve un nuevo string

const texto2 = 'Hola mundo';
console.log(texto2.substring(0, 4)); //Hola

// Split(separador) Divide un string en un array de strings

const texto3 = 'Hola mundo';
console.log(texto3.split(' ')); // ['Hola', 'mundo']