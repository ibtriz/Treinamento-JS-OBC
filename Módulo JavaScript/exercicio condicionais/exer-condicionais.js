const pilotName = prompt("Qual o seu nome, Comandante?")
let velocity = 0
let newVelocity = prompt("A qual velocidade gostaria de acelerar a nave?");
let confirmVelocity = confirm("Deseja ir a " + newVelocity + "km/s?")

if (confirmVelocity) {
    velocity = newVelocity
}

if (velocity <= 0) {
    alert("Nave está parada. Considere aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais!")
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity < 100) {
    alert("Velocidade muito alta! Considere dimunuir")
} else {
    alert("Velocidade perigosa! piloto automático ativado")
}
alert("Comandante: " + pilotName + "\nVelocidade: " + velocity + "km/s")