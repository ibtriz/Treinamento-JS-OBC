/*Este problema pede que você escreva uma função que encontre a soma de todos os elementos em um 
array de números inteiros. Primeiro, você recebe como entrada o tamanho do array e depois os elementos do array. 
Você precisará escrever um código que some todos esses elementos e retorne o resultado.*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    let sum = 0;
    //nessa linha, a variável sum é criada e recebe o valor 0
    for (let i = 0; i < ar.length; i++) {
        //aqui, a variável i é criada e recebe o valor 0, e a condição é que i seja menor que o tamanho do array ar
        sum += ar[i];
        //aqui, a variável sum recebe a soma de sum + ar[i]
    }
    return sum;
    //aqui, a função retorna a variável sum

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
