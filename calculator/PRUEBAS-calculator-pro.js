// Defino varias funciones por separado para cada una de las operaciones
function sum(total, num){
    return total + num;
}

function rest(total, num){
    return total - num;
}

function multi(total, num){
    return total * num;
}

function divi(total, num){
    return total / num;
}
// Defino la función calculadora
function calculatorPro() {
// Con sus variables que será el número que ingrese el usuario y el array donde se van a ir guardando los números que introduzca
    let newNumber;
    let otherNumber;
    let numberList = [];
// Primero pregunto por el primer número. Lo guardo en el array y calculo su raíz cuadrada.
    newNumber = parseFloat(prompt('Introduce un número o cancela para salir.'));
    numberList.push(newNumber);
    console.log('El resultado de la raíz cuadrada es: ' + Math.sqrt(newNumber).toFixed(3));
// Luego hago un bucle donde sigo pidiendo números. Si el usuario cancela, se rompe el bucle y pasa al siguiente condicional de abajo. Si pone
// algo que no sea un número, aparece por consola un aviso. Si todo va bien, ese número se va también al array.
    do {
        otherNumber = parseFloat(prompt('Introduce otro número para operar o cancela para ver los resultados o salir.'));
        if (otherNumber === null) {
            break;
        }else if (Number.isFinite(newNumber) === false || Number.isFinite(otherNumber) === false) {
                console.log('Por favor, utiliza sólo números. Gracias.');
        }else{
            numberList.push(otherNumber);            
        }

    } while (otherNumber !== null && Number.isFinite(otherNumber))
// Aquí ya ejecuto por consola los resultados
    console.log('La suma de todos los números es: '+numberList.reduce(sum));
    console.log('La resta de todos los números es: '+numberList.reduce(rest));
    console.log('La multiplicación de todos los números es: '+numberList.reduce(multi));
    console.log('La divisón de todos los números es: '+numberList.reduce(divi));
// Se le pregunta al usuario si quiere seguir y si no, da la despedida. 
    let pregunta = prompt('¿Desea volver a realizar otra operación? Escriba en mayúsculas, "SI" o "NO".')
    
    if(pregunta === 'SI'){
        calculatorPro();
    } else if (pregunta === 'NO' || pregunta === null || newNumber === null){
        console.log('¡Hasta otra!');
    } else{
        console.log('Error');
    }
}

calculatorPro();
  
