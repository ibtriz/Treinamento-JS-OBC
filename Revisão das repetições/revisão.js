let spaceshipName = prompt("Digite o nome da nave")

let invertedName = ""

// exemplo
// B E A T R I Z    7letras
// 0 1 2 3 4 5 6    6posições

//para poder percorrer de traz pra frente(no exemplo), eu vou da posição length(tamanho)-1 até a posição 0
for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)