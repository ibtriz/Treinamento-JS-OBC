alert("bem vindo! A seguir pediremos que informe alguns dados")
// alert é um comando

let name = prompt("Nos diga seu nome")

//quero armazenar a informação, então coloco uma variável e depois o comando que vai pegar essa informação

let age = prompt("Nos diga sua idade")

let ageConfirmation = confirm("Sua idade é " + age + " anos?")

// alert ("nome: " + name)
// alert ("idade: " + age)
// alert ("idade confirmada: " + ageConfirmation)

// caso quisesse juntar tudo em um alert só
// alert("nome: " + name + ";" + " idade: " + age + ";" + " idade confirmada: " + ageConfirmation + ";")

// usando a quebra de linha do JS
alert("nome: " + name + ";" + "\nIdade: " + age + ";" + "\nidade confirmada: " + ageConfirmation + ";")

// funciona como um <br> do html, usar \n 