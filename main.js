//Crea una función resta que espere dos parámetros a y b, y que devuelva la resta de los mismos.

  function resta (a,b){
  return a - b }

  console.log (resta(12,2));


/*Crea una función la cual te pregunte por una nota del 0 al 10 y, dependiendo del número, 
te devuelva la siguiente clasificación.
Nota: Debes de usar el Switch.
0 - 4: Insuficiente.
5 - 6: Suficiente.
7 - 8: Notable.
9 - 10: Sobresaliente.*/

function Nota() {
  let notaIngresada = prompt("¿Qué nota has sacado?");
  
  switch (notaIngresada) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
          return "Insuficiente";
      case "5":
      case "6":
          return "Suficiente";
      case "7":
      case "8":
          return "Notable";
      case "9":
      case "10":
          return "Sobresaliente";
      default:
          return "No es válida. Ingresa un número del 0 al 10.";
  }
}
console.log(Nota()); 




/*Crea la función duplicaNumero debe recibir un tipo number y 
devolver el doble del valor recibido. Si la función no recibe un dato tipo number
 debe devolver el string ‘Debo ser ejecutada con un número’.*/

 function duplicaNumero(num) {
  if (typeof num === "number") {
      return num * 2; // Devuelve el doble del número si es un número
  } else {
      return 'Debo ser ejecutada con un número'; // Devuelve este mensaje si no es un número
  }
}

console.log(duplicaNumero(3)); // Devuelve 6
//console.log(duplicaNumero("Hola")); // Devuelve 'Debo ser ejecutada con un número'


/*Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter. 
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.*/


function caracterInicial(str) {
  if (typeof str !== "string") {
      return 'Debo ser ejecutada con un string';
  } else if (str.length === 0) {
      return 'Debo ser ejecutada con un string no vacío';
  } else {
      return str[0];
  }
}

console.log(caracterInicial("Hola")); // Devuelve "H"
console.log(caracterInicial("")); // Devuelve "Debo ser ejecutada con un string no vacío"
console.log(caracterInicial(7)); // Devuelve "Debo ser ejecutada con un string"


/*Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número
de carácteres.
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'..*/

function cuentaCaracteres(str) {
  if (typeof str !== "string") {
      return 'Debo ser ejecutada con un string';
  } else {
      return str.length;
  }
}

console.log(cuentaCaracteres("Hola")); // Devuelve 4
console.log(cuentaCaracteres("¡Hola, Patri!")); // Devuelve 13
console.log(cuentaCaracteres(7)); // Devuelve "Debo ser ejecutada con un string"


/*Un palíndromo es una palabra que se escribe igual del derecho que del revés,
 por ejemplo: orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto
y deberá devolver si es un palíndromo o no.
Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'.*/

function esPalindromo(texto) {
  // Verificar si el parámetro no es una cadena de texto o está vacío
  if (typeof texto !== 'string' || texto === '') {
      return 'no es un formato correcto';
  }
  
}












/*Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales.
Para 2 debería devolver 2.00 €. 
Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.*/

function getPrecioMostrar(precio) {
  // Verificar si el parámetro es un número
  if (typeof precio !== 'number') {
      return 'no es un formato correcto';
  }
  
  // Formatear el precio con dos decimales y el símbolo de euro
  return precio.toFixed(2) + ' €';
}


console.log(getPrecioMostrar(2)); // Devuelve "2.00 €"
console.log(getPrecioMostrar(4.5)); // Devuelve "4.50 €"
console.log(getPrecioMostrar("tres")); // Devuelve "no es un formato correcto"



//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.

function division(num1, num2) {
  // Verificar si el divisor es 0
  if (num2 === 0) {
      return 'No se puede dividir por cero';
  }

  // Realizar la división y devolver el resultado
  return num1 / num2;
}

// Ejemplo de uso:
console.log(division(10, 2)); // Devuelve 5
console.log(division(7, 0)); // Devuelve 'No se puede dividir por cero'


/*Crea una función que, dada una array de números, devuelva una nueva array que 
tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8].*/

function filtrarNumeros(array) {
  return array.filter(numero => numero >= 5);
}


var entrada = [3, 6, 8, 2];
console.log(filtrarNumeros(entrada)); // Devuelve [6, 8]


/*Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo.
 Debe devolver true si es primo, sino false. 
Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
 Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.*/

