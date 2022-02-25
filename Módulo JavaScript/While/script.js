let warpCount = 0
let warpCountChoice = ""

let SpacechipName = prompt ("Digite o nome da nave?")

warpCountChoice  = prompt ("Deseja entrar na dobra? \n1- Sim \n 2-Não")

while (warpCountChoice == "1") {
    warpCount += 1
    warpCountChoice = prompt ("Deseja entrar na dobra? \n1- Sim \n 2-Não")
}
alert("A nave " + SpacechipName + " realizou " + warpCount + " dobras")