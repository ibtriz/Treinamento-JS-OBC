// Simular o computador de bordo de uma espaçonave no momento
// em que ela inicia
// a parada até abrir as comportas para os pilotos sairem
// 1 considere que a nave esta a 150km/s
//crie uma função para desacelerar 20km/s a cada segundo
// considere no codigo que cada interação de um laço de 
//repetição
//é um segundo
// função sera hof e tambem deve imprimir cada atualização
// que houver na velocidade da  nave(por meio de callback)
//ao final exiba uma mensagem informando que a nava esta 
//parada e as comportas podem ser abertas

function slowDown(velocity, message) {
    let desacelerar = 20
    while (velocity > 0) {
        message(velocity)
        velocity = -desacelerar
        // A cada interação ela vai ser subtraída pela desaceleração
    }
    alert("A nave parou. É seguro abrir as comportas")
}

let spaceshipVelocity = 150
slowDown(spaceshipVelocity, function (velocity) {
    console.log("Velocidade atual: " + velocity)
})