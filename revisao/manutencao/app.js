const entrada = require('readline-sync');
const funcoes = require('./funcoesManutencao');

const maquina = entrada.question("Digite o nome da maquina: ");
const valorPecas = entrada.questionFloat("Digite o valor das pecas em reais: ");
const horas = entrada.questionInt("Quantas horas trabalhadas? ");
const meses = entrada.questionInt("Quantos meses desde a ultima manutencao? ")

const maoObra = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorPecas, horas);