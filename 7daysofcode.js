//Primeiro dia
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'


    if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    } else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
    }

    if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
    }

    if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
    }

//Segundo dia

const botaoEnviar = document.getElementById("input-enviar");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const linguagem = document.getElementById("linguagem");
const mensagem = document.getElementById("resposta");

//Formulário e mensagem de resposta
botaoEnviar.onclick = function () {
    let dadosInseridos = [nome.value, idade.value, linguagem.value];
    const primeirasPerguntas = document.getElementById("primeiras-perguntas");
    mensagem.innerHTML = `Olá ${dadosInseridos[0]}, você tem ${dadosInseridos[1]} anos e já está aprendendo ${dadosInseridos[2]}!`;
    primeirasPerguntas.classList.add('sumir');

    const pergunta = document.getElementById("texto-pergunta");
    const fieldset = document.getElementById("perguntar-se-gosta");
    pergunta.innerHTML = `E está gostando de estudar ${dadosInseridos[2]}?`;
    fieldset.classList.remove('sumir');
}

//Desafio opcional
const botaoSim = document.getElementById("botao-sim");
const botaoNao = document.getElementById("botao-nao");
const segundaResposta = document.getElementById("segunda-resposta");
 botaoSim.onclick = function () {
    segundaResposta.innerHTML = `Muito bom! Continue estudando e você terá muito sucesso.`
 }
 botaoNao.onclick = function () {
    segundaResposta.innerHTML = `Ahh que pena... Já tentou aprender outras linguagens?`
 }
