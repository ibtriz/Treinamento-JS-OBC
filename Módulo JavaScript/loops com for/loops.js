let spaceship = prompt("Digite o nome da nave")

let charToReplace = prompt("Qual caracter você deseja substituir?")

let replacementChar = prompt("Por qual caracter você deseja substituir?")

let newSpaceship = ""

console.log(spaceship, charToReplace, replacementChar)

for(let position = 0; position < spaceship.length; position++) {
//explicação a variavél position é inicialmente 0
//expressão que verifica se a posição é menor que a quantidade de letras da variavavél spaceship
// e enquanto a posição for menor ele deve incrementar mais uma posição
    if(spaceship[position] == charToReplace) {
    //verifica se o caractere da posição atual é igual o caractere que eu quero substituir
    //se nome da nave na posição da variavel pos é igual a letra que quero substituir
        newSpaceship += replacementChar
        //o novo nome vai receber o caractere que escolheram
    } else {
    // se não for igual ao que eu quero substituir
        newSpaceship += spaceship[position]
        // vai armazenar o caractere normal
    }
}

alert("O novo nome da nave é " + newSpaceship)