/* Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor. */

var numeros = new Array ();

numeros[0] = parseInt (prompt("Digite o primeiro inteiro: ", ""))
numeros[1] = parseInt (prompt("Digite o segundo número inteiro: ", ""))
numeros[2] = parseInt (prompt("Digite o terceiro número inteiro: ", ""))
numeros[3] = parseInt (prompt("Digite o quarto número inteiro: ", ""))
numeros[4] = parseInt (prompt("Digite o quinto número inteiro: ", ""))

var qtdPar = 0;
var qtdImpar = 0; 

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        qtdPar++;
    } else{
        qtdImpar++
    }
}
console.log("A quantidade de ímpares é: " + qtdImpar + " e a quantidade de pares é: " + qtdPar); 