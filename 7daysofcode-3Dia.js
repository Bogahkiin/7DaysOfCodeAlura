//Terceiro dia
function opcaoEscolhida(algo) {
    let opcao;
    opcao = algo;
    for (i = 0; i < 8; i++) {
        if (opcao == i) {
            let idBotao = opcao;
            console.log(idBotao);
            tirarSumirDaPergunta(idBotao);
        }
    }
}
function tirarSumirDaPergunta(idPergunta) {

    const divFront = document.getElementById('perguntas-dia-3-front');
    const divBack = document.getElementById('perguntas-dia-3-back');
    const divFull = document.getElementById('perguntas-dia-3-full');
    const divFinal = document.getElementById('perguntas-dia-3-final');

    console.log(`segunda vez ` + idPergunta);

    let listaPerguntas = [divFront, divBack, divFull, divFinal];

    if (idPergunta == 0) {
        console.log(`terceira vez ` + idPergunta);
        listaPerguntas[0].classList.remove('sumir');
        listaPerguntas[1].classList.add('sumir');
    } else if (idPergunta == 1) {
        listaPerguntas[1].classList.remove('sumir');
        listaPerguntas[0].classList.add('sumir');
    } else if (idPergunta == 2 || idPergunta == 3) {
        listaPerguntas[2].classList.remove('sumir');
    } else if (idPergunta == 4) {
        listaPerguntas[3].classList.remove('sumir');
    }
}
function adicionarPalavraAoParagrafo() {

    const campoTexto = document.getElementById('ultima-pergunta-dia-3');
    const paragrafoLista = document.getElementById('lista-final');
    let palavrasInseridas = campoTexto.value;

    console.log(palavrasInseridas);
    paragrafoLista.innerText += ` ${palavrasInseridas};`;
}
