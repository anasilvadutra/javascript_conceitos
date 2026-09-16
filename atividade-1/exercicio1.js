const entrada = require('readline-sync');

const produto = entrada.question("Qual e o nome do produto: ");
const qtdPorHora = entrada.questionInt("Quantas pecas sao produzidas por hora? ");
const horas = entrada.questionInt("Quantas horas trabalhadas? ");

const prodDiaria = qtdPorHora * horas

console.log("=== RELATORIO DE PRODUCAO ===");
console.log(`Produto: ${produto}`);
console.log(`Pecas produzidas por hora: ${qtdPorHora}`);
console.log(`pecas produzidas no dia ${prodDiaria}`);
console.log("==============================")