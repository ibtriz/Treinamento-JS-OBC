class Spaceship {
    constructor(name, crewQuantity) {
        //this. = atribuir ou criar atributo
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.entraceDoorsOpen = false
    }
    hitch() //método(função) que vai alterar o isHitched e o entraceDoorsOpen
    {
        this.isHitched = true
        this.entraceDoorsOpen = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") //enquanto chosenOption for diferente de 1, 2 ou 3
    {
        chosenOption = prompt("O que deseja fazer?\n" +
            "1- Engatar nave\n" +
            "2- Imprimir naves\n" +
            "3- Sair do programa")
    }
    return chosenOption
}

function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity) //vai receber a instanciação da spaceship e vai armazenar na variável
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => { //vai percorrer cada elemento da lista e vai criar string para exibir no alert
        spaceshipList += (index + 1) + "- " + spaceship.name +
            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = [] //lista de naves engatadas
let chosenOption //a função não vai ler já que ele foi declarado fora, logo são tipo variaveis diferentes

while (chosenOption != "3") {
    chosenOption = showMenu() //aqui estou mandando o programa sempre retornar o menu enquanto a escolha for diferente de 3
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship() //essa função vai perguntar o nome e a crequantity da nave e retorne um objeto da classe nave 
            spaceshipToAdd.hitch() // vai colocar o atributo this.isHitched = true
            hitchedSpaceships.push(spaceshipToAdd) // vai adicionar a spaceship no final
            break
        case "2": //vai imprimir a lista de nave
            printSpaceshipList(hitchedSpaceships)
            break
    }
}