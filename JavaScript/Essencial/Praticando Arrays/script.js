//naves que estão engatadas em uma estação espacial
//posição 0: nome da nave; posição 1 qntd de passageiros;posição 2: se o processo de engate foi concluído
const listaDeNaves = [
    ["Fenix", 8, true], // ex: posição 0 + 1 =plataforma 1
    ["Golias", 10, true], // indice 0, 1 e 2
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
//pq são array bidimensionais? Pq precisam de 2 indices
//numero da plataforma é posição array + 1

// Filtrar nome das naves que tem mais de 9 tripulantes

let maisDe9Passageiros = listaDeNaves.filter(nave => {
    //A variavél recebeu o aray hitchedSpaceships, chamou a ferramenta filter e fex um callback
    //filter vai retornar as linhas:
    //      ["Golias", 10, true],
    //      ["Darwin", 15, false]
    //e é assim que o map vai receber
    return nave[1] > 9
    //retorna verificando se a nave tem mais de 9
}).map(nave => {
    return nave[0]
    //map vai encontrar elemento 0
})
let engatePlataforma = listaDeNaves.findIndex(nave => {
    return nave[2] == false
})

let navesDestaque = listaDeNaves.map(nave => {
    return nave[0].toUpperCase()
})

let mensagem = "Espaçonaves com mais de 9 tripulantes: " + maisDe9Passageiros.join(", ")
mensagem += "\nPlataform com processo de engate: " + (engatePlataforma + 1)
mensagem += "\nEspaçonaves destacadas: " + navesDestaque.join(", ")

alert(mensagem)