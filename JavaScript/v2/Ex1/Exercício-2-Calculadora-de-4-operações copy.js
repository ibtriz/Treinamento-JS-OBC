/*Calculadora de 4 Operações
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela. */

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")
//utilizei let para converter o valor em um número flutuante, se tivesse usado const, não poderia mudar o valor da variável.

firstNumber = parseFloat(firstNumber)
secondNumber = parseFloat(secondNumber)
//parseFloat é uma função que converte uma string em um número de ponto flutuante.
// aqui estou dizendo que a variável firstNumber é igual (=) ao valor digitado pelo usuário convertido para um número de ponto flutuante.
// a ordem de escrita é declarar a variável e armazenar o valor que o usuário digitar. quando tenho essa variável, vou declarar que ela é igual ao valor digitado convertido para um número de ponto flutuante.

let sum = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

alert( "A soma desses números é: " + sum + "\nA subtração desses números é: " + subtraction + "\nA multiplicação desses números é: " + multiplication + "\nA divisão desses números é: " + division)