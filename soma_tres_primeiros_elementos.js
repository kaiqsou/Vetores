/* Faça um algoritmo que leia 6 números e armazene-os em um vetor. Depois, some os 3 primeiros elementos deste vetor. */

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite o primeiro número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));
numeros[5] = parseInt (prompt("Digite o sexto número inteiro: ", ""));

var somaTresPrimeirosElementos = numeros[0] + numeros[1] + numeros[2];

console.log("Soma dos três primeiros elementos: " + somaTresPrimeirosElementos);