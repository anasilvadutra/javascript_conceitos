const readline = require('readline-sync');

let somaTempos = 0;
const totalAtendimentos = 6;

for(let i= 1; i<= totalAtendimentos; i++){
    const tempo = readline.questionFloat(`Digite o tempo do atendimento ${i} em minutos: `);
    somaTempos += tempo;
}

const media = somaTempos/totalAtendimentos;

console.log(`A soma dos tempos e ${somaTempos} e a media sera ${media}`)