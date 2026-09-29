const readline = require('readline-sync');

const nomePeca = readline.question("Digite o nome da peca: ");
const quantidade = readline.questionInt("Digite a quantidade comprada: ");
const precoUnitario  =readline.questionFloat("Digite o preco unitario: ");

const valorTotal = quantidade * precoUnitario;

console.log("--- RESUMO DA COMPRA ---");
console.log(`peca: ${nomePeca}`);
console.log(`Quantidade: ${quantidade} `);
console.log(`Preco unitario: ${precoUnitario.toFixed(2)}`);
console.log(`Total: ${valorTotal.toFixed(2)}`)