//Um homem decidiu ir à uma revenda comprar um carro. 
//Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans,
// motocicletas e caminhonetes. Utilizando uma estrutura switch/case, caso o comprador queira o hatch,
// retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
// Caso seja especificado um modelo que não está disponível,
// retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

let modelo = prompt("Olá, deseja ver qual modelo: \nHatch\nSedans \nMotocicletas \nCaminhonetes")
switch (modelo) {
    case "Hatch":
        alert("Compra efetuada com sucesso")
        break;
    default:
        alert("Tem certeza que não prefere este modelo?")
}