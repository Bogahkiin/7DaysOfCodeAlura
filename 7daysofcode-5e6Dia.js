// Quinto e sexto desafio
// Quinto desafio

// Pegando as divs
const div1aPergunta = document.getElementById("primeira-pergunta");
const div2aPergunta = document.getElementById("segunda-pergunta");
const divFecharLista = document.getElementById("fechar-lista");
const divListaCompras = document.getElementById("lista-compras");

var listaDivs = [div1aPergunta, div2aPergunta, divFecharLista, divListaCompras]; // lista com as const das divs

const paragrafoComALista = document.getElementById("lista-final"); // paragrafo do HTML onde vai a lista no final
var itemDigitadoAdicionar = document.getElementById("qualcomida"); // pegando o campo de digitação
const categorias = document.getElementById("checkboxes"); // pegando as checkbox

// Criando Arrays e uma lista com todos, para por os alimentos inseridos no input
var fruta = [];
var carne = [];
var leite = [];
var doce = [];
var cereais = [];
var massa = [];
var outro = [];
var listaDasArrays = [fruta, carne, leite, doce, cereais, massa, outro];

// Primeira pergunta, apertando botão sim
function botaoSim() {
  for (i = 0; i < listaDivs.length; i++) {
    if (i != 1) {
      listaDivs[i].classList.add("sumir");
      divRemoverItem.classList.add("sumir");
    } else {
      listaDivs[1].classList.remove("sumir");
    }
  }
  paragrafoRemoveuItem.innerText = ""; // parte do desafio do sexto
  paragrafoComALista.innerHTML = "";
  colocaItemNaLista(); // função para adicionar itens na lista
}

// Escrevendo o alimento pra por na lista
function colocaItemNaLista() {
  itemDigitadoAdicionar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      //verificando quando Enter for apertado
      document.getElementById(
        "colocaoquedigitou"
      ).innerText = `E em qual dessas categorias você quer colocar ${itemDigitadoAdicionar.value}?`; // escreve pro usuário qual alimento ele inseriu e em qual categoria quer colocar
      categorias.classList.remove("sumir"); // aparecem as categorias
    }
  });
}

// Adicionando o alimento a uma categoria
function selecionaCategoria(e) {
  divFecharLista.classList.remove("sumir"); // faz surgir o botão para finalizar
  listaDasArrays[e].push(` ${itemDigitadoAdicionar.value}`); // coloca o valor salvo da variável (que é o que foi inserido anterioemente) numa lista
  document.getElementById(`checkbox-${e}`).checked = false; // desmarca a opção escolhida (puramente visual)
  categorias.classList.add("sumir"); // some com as categorias
  itemDigitadoAdicionar.value = ""; // limpa o campo de digitação do usuário
}

// Mostrar a lista com os itens
function fecharLista() {
  for (i = 0; i < listaDivs.length; i++) {
    if (i != 3) {
      listaDivs[i].classList.add("sumir");
    } else {
      listaDivs[3].classList.remove("sumir");
    }
  }
  paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
}

// Apertou o não no início (maluco)
function botaoNao() {
  document.getElementById("naoqueropornada").classList.remove("sumir");
  for (i = 0; i < listaDivs.length; i++) {
    listaDivs[i].classList.add("sumir");
  }
}

// Sexto desafio
// Apertou o botão Remover

const divRemoverItem = document.getElementById("remover");
const paragrafoRemoveuItem = document.getElementById("remover3");
const itemDigitadoRemover = document.getElementById("qualremover");
var palavraParaRemover;
var indexDaPalavraParaRemover;

function botaoRemover() {
  for (i = 0; i < listaDivs.length; i++) {
    if (i != 3) {
      listaDivs[i].classList.add("sumir");
    } else {
      divRemoverItem.classList.remove("sumir");
      divListaCompras.classList.remove("sumir");
    }
  }

  paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
  removeItemDaLista(); // função para retirar itens da lista
}

function removeItemDaLista() {
  itemDigitadoRemover.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      palavraParaRemover = itemDigitadoRemover.value;
      for (i = 0; i < listaDasArrays.length; i++) {
        if (listaDasArrays[i].includes(` ${palavraParaRemover}`)) {
          indexDaPalavraParaRemover = listaDasArrays[i].indexOf(
            ` ${palavraParaRemover}`
          );
          removerDaLista(indexDaPalavraParaRemover);
          itemDigitadoRemover.value = "";
          paragrafoRemoveuItem.innerText =
            palavraParaRemover + " foi removido.";
          paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
        } else {
          paragrafoRemoveuItem.innerText =
            "palavra não encontrada, tente novamente.";
          itemDigitadoRemover.value = "";
        }
      }
    }
  });
}

function removerDaLista(indice) {
  for (i = 0; i < listaDasArrays.length; i++) {
    if (listaDasArrays[i].includes(` ${palavraParaRemover}`)) {
      listaDasArrays[i].splice(indice, 1);
    }
  }
}
