// Desafio 02 : https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md

// Construção e impressão de objetos
const empresa = [{
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}]

const usuario = {
    nome: "Diego",
    empresa: {
      nome: "Rocketseat"
    }
};

console.log(`A empresa ${empresa[0].nome} está localizada em ${empresa[0].endereco.rua}, ${empresa[0].endereco.numero}`);

// Vetores e objetos
const programadores = [{
    nome: 'Diego',
    idade: 25,
    tecnologias: [
        {
            nome: 'JavaScript',
            especialidade: 'Web',
        },
        {
            nome: 'Python',
            especialidade: 'Machine Learning'
        }
    ]
}];

console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologias[0].nome} com especialidade em ${programadores[0].tecnologias[0].especialidade}`)