'use strict'

/* ------------------------------------------------------------------------------------------

1. Encontrar número não repetido: Escreva um algoritmo para encontrar um único
número de um array onde cada número repete três vezes, exceto um:
Input: [5,3,4,3,5,5,3]
Output: 4*/

const arr = [5, 3, 4, 3, 5, 5, 3]

const findNonRepeated = function (arr) {
    const count = [];
    for(let num of arr) {
        //Utilizando index de num no array original para contar quantas vezes aparece
        if(count[num]) {
            count[num]++
        } else {
            count[num] = 1;
        }
    }
    console.log(count);
    
    for (let num in count) {
        if (count[num] !== 3) {
            return parseInt(num);
        }
    }
}
console.log(findNonRepeated(arr));


/* -----------------------------------------------------------------------------------------

2) Verificação de Palíndromo: Escreva um algoritmo para verificar se uma string é um
palíndromo.
Input: "arara"
Output: True*/

const isPalindrome = function(string) {
    // transforma string em um array onde cada item e uma palavra, aplica metodo reverse e depois join para formar uma nova string invertida
    const newString = string.split("").reverse().join("")

    // verificando condição
    if(newString === string) return true;
    
    return false;
}

console.log(isPalindrome('arara'))

/* -----------------------------------------------------------------------------------------

3) Ordenação de Números Pares e Ímpares: Escreva um algoritmo para ordenar os
números de uma lista, colocando os números pares primeiro e os ímpares depois.
Input: [3, 1, 2, 4, 6, 5]
Output: [2, 4, 6, 3, 1, 5]*/

const arr1 = [3, 1, 2, 4, 6, 5];

// filtrando impares
const even = arr1.filter(i => i%2==0);

//filtrando pares
const odd = arr1.filter(i=>i%2!=0);

//printando na tela através de desestruturação de arrays
console.log([...even, ...odd]);

/* -----------------------------------------------------------------------------------------

4) Escreva um algoritmo para calcular o fatorial de um número.
Input: 5
Output: 120*/

const factorial = function(n) {
    // definindo limite da função recursive, pois fatorial de 1 e 0 é igual a 1 e chamando função recursiva
    // ambos são feitos utilizando operador ternário
    return n===0 || n===1 ? 1 : n*factorial(n-1)   
}

console.log(factorial(7));

/* -------------------------------------------------------------------------------------------

6) Fibonacci: Escreva um algoritmo que receba um número e construa um array com a
sequência fibonacci do tamanho do numero informado:
Input : 6
Output : [1, 1, 2, 3, 5, 8]*/

const fibonacci = function(n) {
    // clausula de guarda caso o número seja 0 ou menor
    if (n<=0) return [];
    let num1 = 0, num2 = 1;

    //array inicia com 1 pois é o valor mínimo de n para entrar no loop
    let arr2 = [1];
    for (let i=1; i<n; i++) {
        let nextNum = num1+num2;
        arr2.push(nextNum)
        num1=num2;
        num2=nextNum;
    }
    return arr2;
}

console.log(fibonacci(6));
