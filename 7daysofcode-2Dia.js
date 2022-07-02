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
    mensagem.innerText = `Olá ${dadosInseridos[0]}, você tem ${dadosInseridos[1]} anos e já está aprendendo ${dadosInseridos[2]}!`;
    primeirasPerguntas.classList.add('sumir');

    const pergunta = document.getElementById("texto-pergunta");
    const fieldset = document.getElementById("perguntar-se-gosta");
    pergunta.innerText = `E está gostando de estudar ${dadosInseridos[2]}?`;
    fieldset.classList.remove('sumir');
};
//Desafio opcional
const botaoSim = document.getElementById("botao-sim");
const botaoNao = document.getElementById("botao-nao");
const segundaResposta = document.getElementById("segunda-resposta");
botaoSim.onclick = function () {
    segundaResposta.innerText = `Muito bom! Continue estudando e você terá muito sucesso.`;
};
botaoNao.onclick = function () {
    segundaResposta.innerText = `Ahh que pena... Já tentou aprender outras linguagens?`;
};
