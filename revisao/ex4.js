const entrada = require('readline-sync');

const materias = [];

for (let i = 0; i<=3; i++){
    const material = {
        nome: entrada.question(`Digite o nome do produto ${i+1}: `),
        quantidade: entrada.questionInt(`Digite a quantidade do produto ${i+1}: `),
        EstoqueMinimo: entrada.questionInt(`Digite a quantidade minima do produto ${i+1}: `)

    };
    materias.push(material);

}

console.log("--- RELATORIO DE ESTOQUE ---");

for (let i = 0; i < materias.length; i++){
    const produto = materias[i];

    let situacao;
    if(produto.quantidade < produto.EstoqueMinimo){
        situacao = "repor estoque";
    }else{
        situacao = "Estoque ok";
    }
    console.log(`Material: ${produto.nome}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log(`Estoque minimo: ${produto.EstoqueMinimo}`);
    console.log(`situacao: ${situacao}`);
    console.log("-".repeat(20));
}