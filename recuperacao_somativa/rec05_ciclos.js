const readline = require('readline-sync');

const produtosPorCiclo = readline.questionFloat("Digite a quantidade de produtos produzidos por ciclo: ");

let acumulado = 0;
for (let ciclo = 1; ciclo <= 12; ciclo++) {
    acumulado += produtosPorCiclo;
    console.log(`ciclo ${ciclo} = ${acumulado}`);
}