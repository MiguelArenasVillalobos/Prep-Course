// No cambies los nombres de las funciones.

const { map } = require("@11ty/eleventy/src/TemplateGlob");
const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


/**
 * @param {Array} array
 */
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // const array = [1,2,3,4,5,6]
  return array.map(v => v+1);
}

/**
 * 
 * @param {Array} array 
 * @param {*} elemento 
 */
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}

/**
 * 
 * @param {Array} array 
 * @param {*} elemento 
 */
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

/**
 * 
 * @param {Array} palabras 
 */
// const palabras = ['Hola','gente','como','estamos'];
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  return palabras.join(' ');
}

/**
 * 
 * @param {Array} array 
 * @param {*} elemento 
 * @returns {boolean}
 */
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let elementExist = false;
  array.forEach(v => { if(v === elemento) elementExist = true });

  return elementExist;
}

/**
 * 
 * @param {Array<number>} numeros 
 */
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let resultado = 0;

  numeros.forEach(v => { resultado = resultado+v });
  
  return resultado;
}


/**
 * 
 * @param {Array<number>} resultadosTest 
 */
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  let i = 0;
  let summ = 0;
  let arrayLength = resultadosTest.length;

  while(i < arrayLength) {
    summ = summ + resultadosTest[i++];
  }

  return summ / arrayLength;
}


/**
 * 
 * @param {Array<number>} numeros 
 */
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let numero = 0;

  numeros.forEach(v => {
    if(v > numero) numero = v;
  })
  
  return numero;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  const args = Array.from(arguments);
  let result = null;
  args.forEach(v => {
    if(result === null) {
      result = v;
    } else {
      result = result * v;
    }
  });

  if(result === null) result = 0;
  return result;
}

/**
 * 
 * @param {Array<number>} arreglo 
 */
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  // const lista = [10, 10, 18, 20];

  const nuevaLista = arreglo.filter(v => v > 18);
  return nuevaLista.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  // const dia = [
  //   { id: 1, value: 'Domingo' },
  //   { id: 2, value: 'Lunes' },
  //   { id: 3, value: 'Martes' },
  //   { id: 4, value: 'Miercoles' },
  //   { id: 5, value: 'Jueves' },
  //   { id: 6, value: 'Viernes' },
  //   { id: 7, value: 'Sabado' },
  // ]

  // const findDayById = id => dia.filter(v => v.id === id);

  return numeroDeDia === 7 || numeroDeDia === 1 ? 'Es fin de semana' : 'Es dia Laboral' ;
} 


/**
 * 
 * @param {number} n 
 */
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const numberString = n.toString();

  return numberString.charAt(0) === '9' ? true : false;  
}


/**
 * 
 * @param {Array<*>} arreglo 
 */
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let result = false;
  arreglo.forEach(v => {
    if (arreglo[0] === v) {
      result = true;
    } else {
      result = false;
      return;
    }
  });

  return result;
} 


/**
 * 
 * @param {Array<String>} array 
 */
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  let encontrados = true;
  const mesesSolicitados = ['Marzo', 'Noviembre', 'Enero'];

  // const array = ["Marzo", "Diciembre", "Julio", "Noviembre"];

  const foundMeses = [];

  mesesSolicitados.forEach(v => {
    const found = array.forEach(vb => {
      if(vb === v) foundMeses.push(vb);
    });
  });

  if(foundMeses.length !== mesesSolicitados.length) encontrados = false; 
  
  return encontrados ? mesesSolicitados : 'No se encontraron los meses pedidos';
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  const nuevoArreglo = new Array();
  array.forEach(v => v > 100 ? nuevoArreglo.push(v) : []);
  return nuevoArreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  const MAX_CYCLES = 10;
  const CYCLE_INCREMENT = 2;

  let cicles = 0;
  let result = numero;
  let array = [];

  while(true) {
    cicles += 1;

    result += CYCLE_INCREMENT;
    array.push(result);

    if(cicles === result) return 'Se interrumpió la ejecución'

    if(cicles >= MAX_CYCLES) break;
  }

  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  const MAX_CYCLES = 10;
  const CYCLES_INCREMENT = 2;

  let cicles = 0;
  let result = numero;
  let array = []

  while(true) {

    cicles += 1;
    if(cicles === 5) continue;

    result += CYCLES_INCREMENT;
    array.push(result);

    if(cicles >= MAX_CYCLES) break;
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
