// Desafio 01 : https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

// Cálculo de IMC
const nome01 = 'Diego';
const peso01 = 95;
const altura01 = 1.81;

const imc = peso01 / (altura01 * altura01);

if (imc >= 30) {
    console.log(`${nome01} você está acima do peso`);
    console.log(imc);
} else {
    console.log(`${nome01} você não está cima do peso`);
    console.log(imc);
}

// Cálculo de aposentadoria
const nome02 = 'Silvana';
const sexo02 = 'F';
const idade02 = 48;
const contribuicao02 = 23;

const aposentadoria = idade02 + contribuicao02;

if ((sexo02 === 'F' && aposentadoria >= 85) || (sexo02 === 'M' && aposentadoria >= 95)) {
    console.log(`${nome02} você pode se aposentar!`);
} else {
    console.log(`${nome02} você não pode se aposentar!`);
}