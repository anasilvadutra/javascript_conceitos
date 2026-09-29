const readline = require('readline-sync');

function calcularAproveitamento(util, total){
    return (util/total) * 100;
}

function classificarAproveitamento(percentual){
    if (percentual >= 90){
        return "EXCELENTE";
    } else if (percentual >=75){
        return "ADEQUANDO";
    }else {
        return "REVISAR PRPCESSO";
    }
}

const qtdTotal = readline.questionFloat("Digite a quantidade total de materia-prima: ");
const qtdUtil = readline.questionFloat("Digite a quantidade util: ");

const percentual = calcularAproveitamento(qtdUtil, qtdTotal);
const classificacao = classificarAproveitamento(percentual);

console.log("\n --- relatorio de aproveitamento ---");
console.log(`Quantidade total: ${qtdTotal}`);
console.log(`Quantidade util: ${qtdUtil}`);
console.log(`Aproveitamento: ${percentual.toFixed(1)}`);
console.log(`Classificacao: ${classificacao}`)