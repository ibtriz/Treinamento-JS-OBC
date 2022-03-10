let distanceInLY = prompt("Qual a distância em Anos-Luz que gostaria de calcular?")
let chosenMasures = prompt("Para qual unidade de medida deseja converter? \nDigite: \n1 Para parsec(pc) \n2 Para unidade de medida astrônomica(AU) \n3 Para Quilometros(km)")
let chosenUnity
let convertedDistance

//Utilizando o Switch para verificar qual opção ele digitou
switch (chosenMasures) {
    case "1":
        chosenUnity = "Parsec (pc)"
        convertedDistance = distanceInLY * 0.306601
        break
        //se esse for o caso o "break" não vai deixar o programa verificar os outros casos, oq deixa o programa mais rápido
    case "2":
        chosenUnity = "Unidade Astrônomica (AU)"
        convertedDistance = distanceInLY * 63241.1
        break

    case "3":
        chosenUnity = "Quilômetros(km)"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        //Math.pow para calcular uma potêncialização que no caso seria 10¹²
        break

    default:
        chosenUnity = "unidade não identificada"
        break;
}

alert("Distância em anos-luz: " + distanceInLY + "\nDistÂncia em " + chosenUnity + ": " + convertedDistance)