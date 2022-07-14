//Terceiro dia

//Verificando qual botão foi apertado
function opcaoEscolhida(algo) {
  for (i = 0; i < 8; i++) {
    if (algo == i) {
      tirarSumirDaPergunta(algo);
    }
  }
}

//Fazendo a opção aparecer baseado na função anterior
function tirarSumirDaPergunta(idPergunta) {
  const divFront = document.getElementById("perguntas-dia-3-front");
  const divBack = document.getElementById("perguntas-dia-3-back");
  const divFull = document.getElementById("perguntas-dia-3-full");
  const divFinal = document.getElementById("perguntas-dia-3-final");

  let listaPerguntas = [divFront, divBack, divFull, divFinal]; //Tentando diminuir repetição no código

  if (idPergunta == 0) {
    //Talvez um for ()
    listaPerguntas[0].classList.remove("sumir");
    listaPerguntas[1].classList.add("sumir"); //faz a mensagem do back-end desaperecer caso ela esteja aparecendo
  } else if (idPergunta == 1) {
    listaPerguntas[1].classList.remove("sumir");
    listaPerguntas[0].classList.add("sumir"); //faz o inverso da de cima (front-end desaparece)
  } else if (idPergunta == 2 || idPergunta == 3) {
    listaPerguntas[2].classList.remove("sumir");
  } else if (idPergunta == 4) {
    listaPerguntas[3].classList.remove("sumir");
  }
}

//Última pergunta em que pode ser preenchida por palavras ao infinito

function adicionarTecnologia() {
  const campoTexto = document.getElementById("ultima-pergunta-dia-3");
  let paragrafoLista = document.getElementById("lista-final");

  campoTexto.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      paragrafoLista.innerText += ` ${campoTexto.value};`;
      campoTexto.value = "";
    }
  });
}

adicionarTecnologia();

//
