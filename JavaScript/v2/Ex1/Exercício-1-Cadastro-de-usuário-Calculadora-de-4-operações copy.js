/*Cadastro de Recrutas
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
o primeiro nome
o sobrenome
o campo de estudo
o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
Calculadora de 4 Operações
Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).
Após calcular os resultados o programa deve exibi-los na tela. */

alert ("seja bem vindo ao cadastro de recrutas! vamos realizar o seu cadastro!")

let name = prompt("Nos diga seu primeiro nome")
let lastName = prompt("Nos diga seu sobrenome")
let studyField = prompt("Nos diga seu campo de estudo")
let birthYear = prompt("Nos diga seu ano de nascimento")
//quero armazenar a informação, então coloco uma variável e depois o comando que vai pegar essa informação
let age = 2024 - birthYear

alert("nome completo: " + name + " " + lastName + ";" + "\nCampo de estudo: " + studyField + ";" + "\nIdade: " + age + " anos;")

