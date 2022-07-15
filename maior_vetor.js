/* Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número. */

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite um número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));

var maior = 0

for(let i = 0; i < numeros.length; i++)
{
    if(numeros[i] > maior ){
        maior = numeros[i];
    }
}

console.log("O maior numero  é: " + maior)