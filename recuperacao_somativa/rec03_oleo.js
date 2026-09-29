const readline = require('readline-sync');

const nivelOleo = readline.questionInt("Digite o nivel do oleo em porcentagem: ");

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log("Nivel normal");
}else {
    console.log("Inspencao necessaria");
}

console.log(`valor infirmado: ${nivelOleo} %`)