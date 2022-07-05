//Terceiro dia

//Verificando qual botão foi apertado
function opcaoEscolhida(algo) {
    let opcao;
    opcao = algo;
    for (i = 0; i < 8; i++) {
        if (opcao == i) {
            let idBotao = opcao;
            tirarSumirDaPergunta(idBotao);
        }
    }
}

//Fazendo a opção aparecer baseado na função anterior
function tirarSumirDaPergunta(idPergunta) {

    const divFront = document.getElementById('perguntas-dia-3-front');
    const divBack = document.getElementById('perguntas-dia-3-back');
    const divFull = document.getElementById('perguntas-dia-3-full');
    const divFinal = document.getElementById('perguntas-dia-3-final');

    let listaPerguntas = [divFront, divBack, divFull, divFinal]; //Tentando diminuir repetição no código

    if (idPergunta == 0) { //Talvez um for ()
        listaPerguntas[0].classList.remove('sumir');
        listaPerguntas[1].classList.add('sumir'); //faz a mensagem do back-end desaperecer caso ela esteja aparecendo
    } else if (idPergunta == 1) {
        listaPerguntas[1].classList.remove('sumir');
        listaPerguntas[0].classList.add('sumir'); //faz o inverso da de cima (front-end desaparece)
    } else if (idPergunta == 2 || idPergunta == 3) {
        listaPerguntas[2].classList.remove('sumir');
    } else if (idPergunta == 4) {
        listaPerguntas[3].classList.remove('sumir');
    }
}

//Última pergunta em que pode ser preenchida por palavras ao infinito
function adicionarPalavraAoParagrafo() {

    const campoTexto = document.getElementById('ultima-pergunta-dia-3');
    const paragrafoLista = document.getElementById('lista-final');
    let palavrasInseridas = campoTexto.value;

    paragrafoLista.innerText += ` ${palavrasInseridas};`;
}


/* Verificar o campo de texto e no Enter enviar
function colocaItemNaLista () {
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            console.log("apertou enter "+ itemDigitado.value)
            listaFinal.innerText += ` ${itemDigitado.value},`;
            itemDigitado.value = ""; 
        }
 });
}*/