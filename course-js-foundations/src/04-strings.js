// Strings - Tipo de dato prmiitivo y mutable.
//---------------------------------------------------------PRMIIVITE: STRINGS-----------------------------------------------------------//
const Nombre = 'JavaScript';
const version = 'ES6';

//console.log(Nombre, version);
// const mensaje = 'Bienvenido a ' + Nombre + ' ' + version;
//console.log(mensaje);

//---------------------------------------------------------TEMPLATE LITERALS-----------------------------------------------------------//

const mensaje2 = `Bienvenido y Bienvenida al curso de ${Nombre}, en su versión ${version}`;
console.log(mensaje2);

//-------------------EXPRESIONES------------------//

const precio = 100;
const cantidad = 3;
const total = `El total a pagar es: ${precio * cantidad}`;
console.log(typeof total); // Devolverá un string como tipo de valor, y esto tiene que ver con la coersion

// Durante el curso, veremos en los conceptos avanzados de funciones, cómo podemos retornar, porque no todo se tiene que imprimir en la consola sino que se tiene que transferir al otro elemento donde se va a capturar ese valor


//--------------------MULTILINEA-----------------//

const nota =`
# Este el titulo de mi nota
Este es el contenido de mi nota

- Nota 1
- Nota 2

`

//-----------------------------------------------------METODOS ESENCIALES EN STRINGS---------------------------------------------------//
// CLASE 8, CURSO DE PLATZI

//--------------------LENGHT-----------------//
// Es uno de los métodos más utilizados en JS, y devuelve la cantidad de caracteres de un string, cuando queremos saber si un string contiene el texto que estamos buscando.

const texto = 'Hola mundo';
console.log(texto.length);


//--------------------SLICE-----------------//
// Slice(inicio, fin) "Desde la posición de inicio hasta su fin". Extrae la parte de un string y devuelve un nuevo string.

const texto1 = 'Javascript es Genial';
console.log(texto1.slice(0, 10)); // output: Javascript
console.log(texto1.slice(11)); // output: es Genial "No toma en cuenta los espacios"
console.log(texto1.slice(-6)); // output: Genial.


//--------------------SUBSTRING-----------------//
// Substring(inicio, fin) Extrae la parte de un string y devuelve un nuevo string - Una de las principales diferencias es que NO TRABAJA CON NUMEROS NEGATIVOS.

const texto2 = 'Hola mundo';
console.log(texto2.substring(0, 4)); //Hola


//--------------------SPLIT-----------------//
// Split(separador) "Separa nuestras líneas" Divide un string en un array de strings. Retorna un arreglo.
const texto3 = 'linea1 linea2 linea3';
const lineas = texto3.split(' '); // Aquí se agrega el elemento para el output, sea un espacio " ", i una com ","
console.log(lineas);

//--------------------TRIM-----------------//
// trim( ) Nos permite eliminar espacios de un striung, tanto al inicio como el final. De esta manera podemos hacer manipulaciones a nuestros strings, dependiendo de loq ue querramos hacer.
const texto4 = '  Hola mundo  ';
console.log(texto4.trim())); // "Hola mundo"
console.log(texto4.trimStart())); // "Hola mundo  "
console.log(texto4.trimEnd())); // "  Hola mundo"


//--------------------TO LOWERCASE-----------------//
// toLowerCase( ), toUpperCase( ) - Mayormente se usa en los formularios, comparando los datos que el usuario ingresa.

const texto5 = 'JavaCript';
console.log(texto5.toLowerCase()); // Output: "javascript".
console.log(texto5.toUpperCase()); // Output: "JAVASCRIPT"


//--------------------INCLUDES(SUBCADENA)-----------------//
// Es un método que se usa para saber si algún string se encuentra en el contenido. Se sa mucho para hacer validaciones usando texto.

const contenido = 'Aprende JavaScript desde cero';
console.log(contenido.includes('JavaScript')); // true
console.log(contenido.includes('Python')); // false


//------------------START WITH-----------------//
// startsWith() - endsWith() - Para verificar los documentos, entender la extensión del archivo, y hacer validaciones.

const archivo = 'documento.md';
console.log(archivo.startsWith('doc')); // True
console.log(archivo.endsWith('.md')); // True


//---------------REPLACE AND REPLACE ALL-----------------//
// 'replace()' y 'replaceAll()
const text6 = 'Hola mundo, Hola JavaScript';
console.log(text66.replace('Hola', 'Hi')); // Output: "Hi Mundo, "Hola JavaScript".
console.log(text6.replaceAll('Hola', 'Hi')); // Output: "Hi Mundo, "Hi JavaScript".
console.log(text6); //El string original, no cambia. Hay que recordar que el tipo de de dato 'string' son primitivos INMUTABLES. Cuando trabajemos con estos métodos no van a hacer el cambio sobre la variable, sino que lo hace JS es que crea en memoria otra posición, otro espacio en memoria particularmente con el valor del método. Así pasa con cada una de las variables que hemos usado.
// Debemos también tener en cuenta que estamos declarando constanteds, y si recordamos, los valores de las constantes no cambian, son inmutables.