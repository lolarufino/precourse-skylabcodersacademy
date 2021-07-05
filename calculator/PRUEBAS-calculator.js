// Defino una función de dos parámetros para las operaciones 
function operaciones(param1, param2) {
    let resultSum = param1 + param2;
    let resultRest = param1 - param2;
    let resultMulti = param1 * param2;
    let resultDiv = param1 / param2;

// Propongo condiciones para el redondeo de hasta 3 decimales si fuera necesario
    if (Number.isInteger(resultSum) === true) {
        console.log(`The result of the sum is ${resultSum}.`);
    } else {
        console.log(`The result of the sum is ${resultSum.toFixed(3)}.`);
    }


    if (Number.isInteger(resultRest) === true) {
        console.log(`The result of the rest is ${resultRest}.`);
    } else {
        console.log(`The result of the rest is ${resultRest.toFixed(3)}.`);
    }

    if (Number.isInteger(resultMulti) === true) {
        console.log(`The result of the multiplication is ${resultMulti}.`);
    } else {
        console.log(`The result of the multiplication is ${resultRest.toFixed(3)}.`);
    }

    if (Number.isInteger(resultDiv) === true) {
        console.log(`The result of the divition is ${resultDiv}.`);
    } else {
        console.log(`The result of the divition is ${resultDiv.toFixed(3)}.`);
    }

}

// Defino una función de dos parámetros que comprobará las condiciones indicadas en el ejercicio
function calculadora(num1, num2) {

    // Defino un primer if para que si el usuario no ha puesto un segundo número, y el número que ha puesto es de verdad un número, muestre su raíz cuadrada
    if (num2 === undefined && Number.isFinite(num1) === true) {
        return 'The result of the square root is ' + Math.sqrt(num1).toFixed(3);
    // Defino la condición de que si alguno de los dos parámetros no es un número, que le diga al usuario que solo introduzca números 
    } else if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
        return 'Por favor, utiliza sólo números. Gracias.';
    
    // Si todo va bien y el usuario ha introducido dos números, entonces que me haga las operaciones de la función operaciones
    } else {
        return operaciones(num1, num2);
    }
}

// Llamo a la función calculadora a ver si funciona todo
calculadora(3, 5);

// Por alguna razón, por consola, me sale un "undefined" cuando uso parámetros que son números enteros o números decimales

/*// Creo una función que se llama calculadora y que tiene dos parámetros
function calculadora(num1, num2) {

    // Defino todas las variables que voy a utilizar, que son las operaciones y el resultado final
    let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}.`, `The result of the rest is ${resultRest}.`, `The result of the multiplication is ${resultMulti}.`, `The result of the divition is ${resultDiv}.`];

    // Indico que si el num2 es indefinido y el num1 es finito, calcúlame la raíz cuadrada de éste y viceversa.
    if (num2 === undefined && Number.isFinite(num1) === true) {
        return 'The result of the square root is ' + Math.sqrt(num1);
    } else if (num1 === undefined && Number.isFinite(num2) === true) {
        return 'The result of the square root is ' + Math.sqrt(num2);
        //Indico que si el num1 no es un número, pero es diferente a undefined, o que si el num2 no es un número y también es diferente a infinito, que por favor, el usuario ponga sólo números.
    } else if (Number.isFinite(num1) === false && num1 != undefined || Number.isFinite(num2) === false && num2 != undefined) {
        return 'Por favor, utiliza sólo números. Gracias.';
        // Indico que si el resultado de alguna de las operaciones es decimal, me muestre dicho número con solo tres decimales.
    } else if (Number.isInteger(resultSum) === false) {
        finalResult.splice(0, 1, 'The result of the sum is ' + resultSum.toFixed(3));
    } else if (Number.isInteger(resultRest) === false) {
        finalResult.splice(1, 1, 'The result of the rest is ' + resultRest.toFixed(3));
    } else if (Number.isInteger(resultMulti) === false) {
        finalResult.splice(2, 1, 'The result of the multiplication is ' + resultMulti.toFixed(3));
    } else if (Number.isInteger(resultDiv) === false) {
        finalResult.splice(3, 1, 'The result of the divition is ' + resultDiv.toFixed(3));
    } else if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return `The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`
        // Indico que si num1 y num2 son números finitos diferentes a undefined, que me pase el resultado final
    } else (num1 === Number.isFinite() && num1 != undefined && Number.isInteger(num1) === true && num2 === Number.isFinite() && num2 != undefined && Number.isInteger(num2) === true); {
        return finalResult;
    }
}

//Llamo a la función poniendo diferentes tipos de combinaciones.
calculadora(3.98765, 7);




//Llamo a la función poniendo diferentes tipos de combinaciones.
calculadora(3, 7);

function calculadora(num1,num2){

    let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    if (num1 === null) {
    console.log('The result of the square root is '+Math.sqrt(num2));
  } else (num2 === null);{
    console.log('The result of the square root is '+Math.sqrt(num1));
  }

  if (Number.isFinite(num1) === false && num1 != null || Number.isFinite(num2) === false && num2 != null) {
      console.log('Por favor, utiliza sólo números. Gracias.');
    } else if(resultSum % 1 != 0 || resultRest % 1 != 0 || resultMulti % 1 != 0 || resultDiv % 1 != 0){
      console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`);
    }else {
      console.log(finalResult);
  }

}

calculadora(9, 6);

if (num1 === null && num1 != Number.isFinite()) {
    console.log('The result of the square root is '+Math.sqrt(num2));
  } else if(num2 === null && num2 != Number.isFinite()){
    console.log('The result of the square root is '+Math.sqrt(num1));
  } else {
    console.log('');
  }

const num1 = 5;
const num2 = 6;

let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    if (num1 === null) {
        console.log('The result of the square root is '+Math.sqrt(num2));
      } else (num2 === null);{
        console.log('The result of the square root is '+Math.sqrt(num1));
      }

    if (Number.isFinite(num1) === false && num1 != null || Number.isFinite(num2) === false && num2 != null) {
      console.log('Por favor, utiliza sólo números. Gracias.');
    } else if(resultSum % 1 != 0 || resultRest % 1 != 0 || resultMulti % 1 != 0 || resultDiv % 1 != 0){
      console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`);
    }else {
      console.log(finalResult);
  }

  function calculadora(num1,num2){

    let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    if (Number.isFinite(num1) === false && num1 != null || Number.isFinite(num2) === false && num2 != null) {
      console.log('Por favor, utiliza sólo números. Gracias.');
    } else if(resultSum % 1 != 0 || resultRest % 1 != 0 || resultMulti % 1 != 0 || resultDiv % 1 != 0){
      console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`);
    }else {
      console.log(finalResult);
  }

}

    if (num1 === null) {
    console.log('The result of the square root is '+Math.sqrt(num2));
  } else (num2 === null);{
    console.log('The result of the square root is '+Math.sqrt(num1));
  }

calculadora(9, 6);

function calculadora(num1,num2){

  let resultSum = num1 + num2;
  let resultRest = num1 - num2;
  let resultMulti = num1 * num2;
  let resultDiv = num1 / num2;
  let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

  if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
    console.log('Por favor, utiliza sólo números. Gracias.');
}

   if (num1 === undefined && Number.isFinite(num2) === true) {
    console.log(Math.sqrt(num2));
} else (Number.isFinite(num1) === true && num2 === undefined);{
    console.log(Math.sqrt(num1));


}


  if (num1 % 1 != 0 || num2 % 1 != 0) {
    console.log(finalResult.toFixed(3));
} else (num1 === Number.isFinite() && num2 === Number.isFinite());{
    console.log(finalResult);
}

}

console.log(calculadora(6, 5));

if (typeof num1 == undefined) {
    console.log(Math.sqrt(num2));
} else (typeof num2 == undefined);{
    console.log(raizCuadrada);
}



function calculadora(num1,num2){

    let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
      console.log('Por favor, utiliza sólo números. Gracias.');
      } else if(resultSum % 1 != 0 || resultRest % 1 != 0 || resultMulti % 1 != 0 || resultDiv % 1 != 0){
      console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`)
      }else{
    console.log(finalResult);
  }

  }

  calculadora(8, 6);



  function calculadora(num1,num2){

    let resultSum = num1 + num2;
    let resultRest = num1 - num2;
    let resultMulti = num1 * num2;
    let resultDiv = num1 / num2;
    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
      console.log('Por favor, utiliza sólo números. Gracias.');
      } else if(num1 % 1 != 0 || num2 % 1 != 0){
      console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`)
      }else{
    console.log(finalResult);
  }

  }

  calculadora(8, 6);

function calculadora(num1,num2){

  let resultSum = num1 + num2;
  let resultRest = num1 - num2;
  let resultMulti = num1 * num2;
  let resultDiv = num1 / num2;
  let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

    switch(num1){
        case Number.isFinite(num1) === false:
            console.log('Por favor, utiliza sólo números. Gracias.');
            break;
        case num1 === undefined:
            console.log(Math.sqrt(num2));
            break;
        case Number.isFinite(num1) === true:
            console.log(Math.sqrt(num1));
        case num1 % 1 != 0:
            console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`)
            break;
        case num1 === Number.isFinite():
            console.log(finalResult);
            break;
        default:
            console.log(finalResult);
            break;
        }

        switch(num2){
            case Number.isFinite(num2) === false:
                console.log('Por favor, utiliza sólo números. Gracias.');
                break;
            case num2 === undefined:
                console.log(Math.sqrt(num1));
                break;
            case Number.isFinite(num2) === true:
                console.log(Math.sqrt(num2));
            case num2 % 1 != 0:
                console.log(`The result of the sum is ${resultSum.toFixed(3)}. The result of the rest is ${resultRest.toFixed(3)}. The result of the multiplication is ${resultMulti.toFixed(3)}. The result of the divition is ${resultDiv.toFixed(3)}.`)
                break;
            case num2 === Number.isFinite():
                console.log(finalResult);
                break;
            default:
                console.log(finalResult);
                break;
            }
}


console.log(calculadora('a',5));



let num1 = 5;
let num2 = 2;

if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
    console.log('Por favor, utiliza sólo números. Gracias.');
} else if (num1 === undefined) {
    console.log(Math.sqrt(num2));
} else (num2 === undefined);{
    console.log(Math.sqrt(num1));
}

let resultSum = num1 + num2;
let resultRest = num1 - num2;
let resultMulti = num1 * num2;
let resultDiv = num1 / num2;

let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];

if (num1 % 1 != 0 || num2 % 1 != 0) {
    console.log(finalResult.toFixed(3));
} else (num1 === Number.isFinite() && num2 === Number.isFinite());{
    console.log(finalResult);
}

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function calculadora(a, b) {
    if (num1 != Number.isFinite(num1) || num2 != Number.isFinite(num2)) {
        console.log('Por favor, utiliza sólo números. Gracias.')
    } else {
        return a + b, a - b, a * b, a / b;
    }

    calculadora(2, 4);

    var resultado = ['El resultado de la suma es ' + suma(a, b), 'El resultado de la resta es ' + resta(a, b), 'El resultado de la multiplicacion es ' + multiplicacion(a, b), 'El resultado de la division es ' + division(a, b)];

    const userChoice = function calculadora(num1, num2) {

    } else {
        console.log('The result of the sum is ' + (num1 + num2);
    console.log('The result of the rest is ' + (num1 - num2);
    console.log('The result of the multiplication is ' + (num1 * num2);
    console.log('The result of the division is ' + (num1 / num2);

}

const resultado = cal(num1, num2){

}


function calculadora(a, b) {
    return suma(a, b)
    return resta(a, b)
    return multiplicacion(a, b)
    return division(a, b);

    function calculadora(num1, num2) {
        var num1 = a,
            num2 = b;

        function sumar() {
            return 'El resultado de la suma es ' + (a + b);
        }
        function restar() {
            return 'El resultado de la resta es ' + (a - b);
        }
        function multiplicar() {
            return 'El resultado de la multiplicación es ' + (a * b);
        }
        function division() {
            return 'El resultado de la división es ' + (a / b);
        }
    }

    console.log(calculadora(2, 4));



    var resultSum = sumar(a, b);

    console.log(calculadora(2, 4));

    let a = 4;
    let b = 6;

    const resultSum = (a, b) => a + b;
    const resultRest = (a, b) => a - b;
    const resultMulti = (a, b) => a * b;
    const resultDivi = (a, b) => a / b;

    let finalResult = [`The result of the sum is ${resultSum}. The result of the rest is ${resultRest}. The result of the multiplication is ${resultMulti}. The result of the divition is ${resultDiv}.`];



    console.log(calculadora(2, 4));


    var resultado = ['El resultado de la suma es ' + resultSum];

    console.log(resultado);

 const resultadoFinal = function calculadora(num1, num2) {
        var resultSum = num1 + num2;
        var resultRest = num1 - num2;
        var resultMulti = num1 * num2;
        var resultDiv = num1 / num2;
        console.log(`La suma de los números es ${resultSum}. La resta de los números es ${resultRest}. La multiplicación de los números es ${resultMulti}. La división de los números es ${resultDiv}.`)

    }
resultadoFinal(2,4);
    console.log(resultadoFinal);*/