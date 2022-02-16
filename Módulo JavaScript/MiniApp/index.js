let departureDateEntry = prompt("digite a data de partida(formato DD/MM/YYYY)")

//estou utilizando o moment para convertar a data em forma de string e transformando em uma forma que o moment consiga entender
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate
//moment transforma a data me milisegundos 

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida \n 1- Segundos \n2- Minutos \n3- Horas \n4- Dias")
//dando opção do usuário escolher como gostaria de visualizar o tempo

if(chosenOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff/1000)
    // oq estou fazendo: armazenando em segundos de partida
    // utilizei a biblioteca nativa do JS, math. "round" arredonda pra cima ou pra baixo um valor quebrado
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
}   

else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert ("Tempo de vôo: " + minutesOfDeparture + " minutos")
}     

else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert ("Tempo de vôo: " + hoursOfDeparture + " Horas")
}

else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert ("Tempo de vôo: " + daysOfDeparture + " dias")
}
else{
    alert("Opção Inválida")
}
