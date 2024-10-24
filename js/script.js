//* Declaramos nuestra variable principal:

const challenge = '30 Days of JavaScript';

//? Ahora hacemos uso de los metodos del tipo de dato "string":

console.log(challenge);                 // 30 Days of JavaScript
console.log(challenge.length);          // 21 caracteres
console.log(challenge.toUpperCase());   // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase());   // 30 days of javascript

/* 
* Con el metodo substr() eleccionamos caracter, declarando desde que caracter empezará extraer la palabra que queramos del string:
*/

console.log(
    challenge.substring(3,7) // Days
);

console.log(
    challenge.substring(3,21) // Days of JavaScript
);

//* Compruebamos si la cadena contiene una palabra Script usando el método includes():

console.log(
    challenge.includes('Script') // True
);

/* 
* Convertimos el string contenido en un array con el metodo .split (en el parentesis agregamos espacio para definir que cada palabra esté separada por comas):
*/ 

console.log(
    challenge.split(" ") // [ '30', 'Days', 'of', 'JavaScript' ]
);

//* Creamos una variable llamada bigTechs que contega las siguientes compañias:

const bigTechs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

//* Ahora las comvertimos en array de strings:

console.log(
    bigTechs.split(",") // ['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle',' Amazon']
);

//* Reemplazamos la palabra "JavaScript" por "Node" con .replace():

console.log(
    challenge.replace('JavaScript', 'Node') // 30 Days of Node
);

//* Utilizamos el método charAt() para saber cuál es el carácter en el índice 15 en la cadena de "challenge":

console.log(
    challenge.charAt(15) // 'S', es el caracter
);

//* Usamos charCodeAt() para saber cuál es el código de carácter de J en la cadena de "challenge":

console.log(
    challenge.charCodeAt('J') // Su código es 51
);

//* Con indexOf(), buscamos la primera vez que aparece un caracter o desde que indice comienza una palabra:

console.log(
    challenge.indexOf('a') // Su indice es 4
);

//* Con lastIndexOf(), buscamos la última vez que aparece un caracter o desde que indice termina una palabra:

console.log(
    challenge.lastIndexOf('a') // Su indice es 14
);

const sentence = 'You cannot end a sentence with because because because is a conjunction';

//* Utilizamos indexOf() para encontrar la posición de la primera aparición de la palabra "because" en "sentence":

console.log(
    sentence.indexOf('because') // Su indice en donde comienza es el 31
);

//* Utilizamos lastIndexOf() para encontrar la posición de la última aparición de la palabra "because" en "sentence":

console.log(
    sentence.lastIndexOf('because') // Su indice en donde comienza es el 47
);

//* Usamos search() para encontrar la posición de la palabra "because":

console.log(
    sentence.search("because") // Su indice en donde comienza es el 31
);

//* Para eliminar cualquier espacio en blanco de un lado a otro, usamos trim():

let challenge_2 = '    30 Days of JavaScript     ';

    console.log(challenge_2); // '    30 Days of JavaScript     '    

console.log(
    challenge_2.trim() // '30 Days of JavaScript'
);

//* Usamos el metodo startWith para verificar si comienza con un valor dado (strings en este caso):

console.log(
    challenge.startsWith('30') // true
);

//* Usamos el metodo endsWith para verificar si termina con un valor dado:

console.log(
    challenge.endsWith('JavaScript') // true
);

/* 
* Hacemos uso del metodo match, para devolver una array con información del string.
* Pero en este caso debemos hacer uso del modificador "/g" para poder obtener las veces que a se repite:
*/
console.log(
    challenge.match(/a/g) // [ 'a', index: 4, input: '30 Days of JavaScript', groups: undefined ]
);

    console.log(
        challenge.match(/a/g) // [ 'a', 'a', 'a']
    );

console.log(
    challenge.match(/a/g).length // 3, que son las veces que se repite 'a'.
);

/* 
 * Con el metodo concat(), podemos unir strings sencillos, para formar un string mas largo:
*/

const str_1 = '30 Days Of';
const str_2 = ' JavaScript';

console.log(
    str_1.concat(str_2) // 30 Days Of JavaScript, igual al "str_1 + str_2"
);

/* 
* Por último, usamos el metodo repeat para repetir un mismo string cuantas veces que queramos (lo malo es que al no tener un espacio del lado derecho del string en la variable principal, las frases estan pegadas):
*/

console.log(
    challenge.repeat(2) // 30 Days of JavaScript30 Days of JavaScript
);
