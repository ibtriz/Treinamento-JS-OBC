//O array bidimensional nada mais é que um array que armazena outro array. 
//Trata-se de um recurso muito útil em diversas situações. Confira o próximo exemplo, 
//em que criamos um array bidimensional para armazenar o nome, sobrenome, 
//idade e curso dos alunos. Confira o código.
var arrayBidimensionalLiteral = [];
arrayBidimensionalLiteral[0] = ["João", "Souza", 20, "Direito"];
arrayBidimensionalLiteral[1] = ["Maria", "Gonçalves", 21, "Medicina"];
console.log(arrayBidimensionalLiteral);
/*saída:
[
  [ 'João', 'Souza', 20, 'Direito' ],
  [ 'Maria', 'Gonçalves', 21, 'Medicina' ]
]
*/
var arrayBidimensionalNew = new Array();
arrayBidimensionalNew[0] = new Array("João", "Souza", 20, "Direito");
arrayBidimensionalNew[1] = new Array("Maria", "Gonçalves", 21, "Medicina");
console.log(arrayBidimensionalNew);
/* saída:
[
  [ 'João', 'Souza', 20, 'Direito' ],
  [ 'Maria', 'Gonçalves', 21, 'Medicina' ]
]
*/
//Nesse exemplo, fizemos a declaração do array tanto da forma literal quanto com o construtor new().
// Perceba que primeiro criamos um array unidimensional e, 
//a seguir, acessamos cada elemento para adicionar um novo array com o conteúdo desejado.





//couxete [] externo é um array
let spaceships = [["Colossus", 40], ["Elemental", 20], "Golias", "Helmet"]

console.log(spaceships[2][1])
// está chamando array na posição 2, e dentro dele posição1
//ou seja "o" de "Golias"
/////////////////////////////////////////////////////////////
let discoverySpaceships = ["Elemental", "Darwin", "Ártemis"]

let battleSpaceships = ["Fenix", "Golias", "Helmet"]

let extractionSpaceships = ["Deméter", "Puller"]

let randomSpaceships = [

 discoverySpaceships.indexOf("Elemental"), 

 battleSpaceships.indexOf("Helmet"), 

 extractionSpaceships.indexOf("Puller")

]
/////0, 2;1

//////////////////////////////////////////////////////////
///
let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"]

spaceshipsList.pop() // apagaria supernova

spaceshipsList.pop() // apagaria ["Fenix", "Revivor"] pq é considerado um unico elemento

spaceshipsList.push("Elemental")

spaceshipsList.unshift("Eagle")

spaceshipsList.shift() // apagaria eagle

spaceshipsList.unshift("")

// resposta seria 
//  ["", "Colossus", "Helmet", "Elemental"]