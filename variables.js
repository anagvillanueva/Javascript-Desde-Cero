// var es una forma antigua de declarar variables, let es la forma moderna de declarar variables.

var nombre = "Ana"; 

var nombre = "Fernanda"; 

var nombre = "Victor";

console.log(nombre);

// let no permite redeclarar variables, lo que significa que no puedes declarar la misma variable dos veces.

// let tiene un scope de bloque, lo que significa que solo vive en el bloque donde fue declarada. Un bloque es {}

let apellido1 = "Gutierrez"; 

let apellido2 = "Lopez";

// let SI permite cambiar el valor 
// Reasignacion de valor
apellido1 = "Perez";
console.log(apellido1);


// const es una constante, no se puede reasignar el valor
const PI = 3.1416;

PI = 4; // Esto no se puede hacer

