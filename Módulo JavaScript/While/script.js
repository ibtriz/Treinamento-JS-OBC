let spacechip = prompt("Olá, Digite o nome da nave")
let warpSpace = ""
let warpSpaceCount = 0

warpSpace = prompt("Deseja realizar dobra espacial? \n1- Sim \n2- Não")
while(warpSpace == "1")
{
   warpSpaceCount += 1
   warpSpace = prompt("Deseja realizar mais uma dobra espacial? \n1- Sim \n2- Não")

}
alert ("Nave: " + spacechip +"\nQuantidade de dobras realizadas: " + warpSpaceCount)