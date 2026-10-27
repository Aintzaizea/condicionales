//Ejercicio 1: Verificar si un número es positivo, negativo o cero
 
function verificarNumero (num) {
    if (num > 1) {
        return `El número ${num} es positivo`
    } else if (num < 0) {
        return `El número ${num} es negativo`
    } else {
        return `El número ${num} es 0`
    }
};    

console.log(verificarNumero(88));
console.log(verificarNumero(0));
console.log(verificarNumero(-27));

//Ejercicio 2: Edad legal para votar

function puedeVotar (edad) {
    if (edad >= 18) {
        return `Tienes ${edad} años y puedes votar`
    } else {
        return `Tienes ${edad} años y no puedes votar`
    }
};

console.log(puedeVotar(18));
console.log(puedeVotar(68));
console.log(puedeVotar(6));

//Ejercicio 3: Mayor de dos números

function mayorDeDos (num1, num2) {
    if (num1 > num2) {
        return `El número mayor es ${num1}`
    } else if (num2 > num1) {
        return `El número mayor es ${num2}`
    } else {
        return `Los números ${num1} y ${num2} son iguales`
    }
};

console.log(mayorDeDos(4, 5));
console.log(mayorDeDos(88, 21));
console.log(mayorDeDos(67, 67));

//Ejercicio 4: Determinar si un número es divisible por 5

function esDivisiblePorCinco (numero) {
    if (numero % 5 === 0) {
        return true
    } else {
        return false
    }
};

console.log(esDivisiblePorCinco(45));
console.log(esDivisiblePorCinco(53));
console.log(esDivisiblePorCinco(0));

//Ejercicio 5: Clasificar nota de examen

function clasificarNota(nota) {
    if (nota >= 90) {
        return "Excelente"
    } else if (nota >= 70 && nota < 90) {
        return "Buena"
    } else if (nota >= 50 && nota < 70) {
        return "Regulintxi"
    } else {
        return "Insuficiente"
    }
};

console.log(clasificarNota(92));
console.log(clasificarNota(75));
console.log(clasificarNota(62));
console.log(clasificarNota(50));
console.log(clasificarNota(5));