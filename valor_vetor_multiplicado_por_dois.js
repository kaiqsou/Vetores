/* Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, 
e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela. */

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite o primeiro número inteiro: ", ""));
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""));
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""));
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""));
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""));

var multiplicados = new Array() 
multiplicados[0] = numeros[0] * 2;
multiplicados[1] = numeros[1] * 2;
multiplicados[2] = numeros[2] * 2;
multiplicados[3] = numeros[3] * 2;
multiplicados[4] = numeros[4] * 2;

console.log("Valor original é: " + numeros + " e o valor multliplicados por 2 é: " + multiplicados);