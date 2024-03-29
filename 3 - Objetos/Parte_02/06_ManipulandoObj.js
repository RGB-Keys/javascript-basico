// Aqui fica um exemplo da criação de um objeto literal e depois
//a criação de uma propriedade chamada "animalEstimacao" que se
//trata de um array de objetos, o que nos permite utilizar
//funções comuns como filter().

const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
}

cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
}]

cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
})

console.log(cliente);