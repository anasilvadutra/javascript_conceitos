const entrada = require('readline-sync');
const funcoes = require('./funcoesOrcamento');

const nomeCliente = entrada.question("Digite o nome do cliente: ");
const valorMateriais = entrada.questionFloat("Digite o valor dos materiais R$: ");
const horas = entrada.questionInt("Quantas horas trabalhadas?: ");
const valorMaoDeObras = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorMateriais, horas);
const situacao = funcoes.verificarDesconto(total);

console.log("\n---Relatorio de Orcamento Tecnico---");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Materiais R$ ${valorMateriais.toFixed(2)}`);
console.log(`Horas ${horas}`);
console.log(`Valor ${valorMaoDeObras.toFixed(2)}`);
console.log(`Total ${total.toFixed(2)}`);
console.log(`Desconto ${situacao}`)


