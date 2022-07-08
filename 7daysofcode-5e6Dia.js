// Quinto e sexto desafio
// Quinto desafio

// Pegando as divs
const div1aPergunta = document.getElementById("primeira-pergunta");
const div2aPergunta = document.getElementById("segunda-pergunta");
const divFecharLista = document.getElementById("fechar-lista")
const divListaCompras = document.getElementById("lista-compras");

const listaDivs = [div1aPergunta, div2aPergunta, divFecharLista, divListaCompras]; // lista com as const das divs

const paragrafoComALista = document.getElementById("lista-final"); // paragrafo do HTML onde vai a lista no final
var itemDigitadoAdicionar = document.getElementById("qualcomida"); // pegando o campo de digitação
const categorias = document.getElementById('checkboxes'); // pegando as checkbox

// Criando Arrays e uma lista com todos, para por os alimentos inseridos no input
let fruta = []; let carne = []; let leite = []; let doce = []; let cereais = []; let massa = []; let outro = []; 
let listaDasArrays = [fruta, carne, leite, doce, cereais, massa, outro];



// Primeira pergunta, apertando botão sim
function botaoSim () {
    div1aPergunta.classList.add('sumir'); 
    div2aPergunta.classList.remove('sumir'); // faz aparecer a segunda pergunta (qual alimento quer por e o campo)
    divRemoverItem.classList.add('sumir'); // parte do desafio do sexto dia
    divListaCompras.classList.add('sumir'); // parte do desafio do sexto dia
    paragrafoRemoveuItem.innerText = "" // parte do desafio do sexto
    paragrafoComALista.innerHTML = ""
    colocaItemNaLista(); // função para adicionar itens na lista 
}

// Escrevendo o alimento pra por na lista
function colocaItemNaLista () {
    itemDigitadoAdicionar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") { //verificando quando Enter for apertado
            document.getElementById("colocaoquedigitou").innerText = `E em qual dessas categorias você quer colocar ${itemDigitadoAdicionar.value}?`; // escreve pro usuário qual alimento ele inseriu e em qual categoria quer colocar
            categorias.classList.remove('sumir'); // aparecem as categorias
        }
    });
}

// Adicionando o alimento a uma categoria
function selecionaCategoria (e) {
    divFecharLista.classList.remove('sumir'); // faz surgir o botão para finalizar
    listaDasArrays[e].push(` ${itemDigitadoAdicionar.value}`); // coloca o valor salvo da variável (que é o que foi inserido anterioemente) numa lista
    document.getElementById(`checkbox-${e}`).checked = false; // desmarca a opção escolhida (puramente visual)
    categorias.classList.add('sumir'); // some com as categorias
    itemDigitadoAdicionar.value = ""; // limpa o campo de digitação do usuário
}

// Mostrar a lista com os itens
function fecharLista () {
    divListaCompras.classList.remove('sumir'); 
    paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
    div1aPergunta.classList.add('sumir'); 
    div2aPergunta.classList.add('sumir');
    divFecharLista.classList.add('sumir');
}

// Apertou o não no início (maluco)
function botaoNao () {
    document.getElementById("naoqueropornada").classList.remove('sumir');
    div1aPergunta.classList.add('sumir');
    div2aPergunta.classList.add('sumir');
    divFecharLista.classList.add('sumir');
    divListaCompras.classList.add('sumir')

    /* criado na tentativa de diminuir a repetição de código, porém, mesmo funcionando, dá erro no console por motivos desconhecidos
    for (i = 0; listaDivs.length; i++) {
        if (listaDivs[i].classList.contains('sumir') == false){
            listaDivs[i].classList.add('sumir');
        } else {break; console.log("parou?")}
    } */
}

// Sexto desafio
// Apertou o botão Remover

const divRemoverItem  = document.getElementById("remover");
const paragrafoRemoveuItem  = document.getElementById("remover3");
const itemDigitadoRemover = document.getElementById("qualremover");
let palavraParaRemover;
let indexDaPalavraParaRemover;

function botaoRemover () {
    divRemoverItem.classList.remove('sumir');
    divListaCompras.classList.remove('sumir');
    div1aPergunta.classList.add('sumir');
    div2aPergunta.classList.add('sumir');
    divFecharLista.classList.add('sumir');
    paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
    removeItemDaLista(); // função para retirar itens da lista
}

function removeItemDaLista () {
    itemDigitadoRemover.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            palavraParaRemover = itemDigitadoRemover.value;
            for (i = 0; i < listaDasArrays.length; i++) {
                if (listaDasArrays[i].includes(` ${palavraParaRemover}`)) {
                    indexDaPalavraParaRemover = listaDasArrays[i].indexOf(` ${palavraParaRemover}`);
                    removerDaLista (indexDaPalavraParaRemover); 
                    itemDigitadoRemover.value = "";
                    paragrafoRemoveuItem.innerText = palavraParaRemover + " foi removido."
                } else {
                    paragrafoRemoveuItem.innerText = "palavra não encontrada, tente novamente.";
                    itemDigitadoRemover.value = "";
                }
            }
        }
    });
}

function removerDaLista (indice) {
    for (i = 0; i < listaDasArrays.length; i++) {
        if (listaDasArrays[i].includes(` ${palavraParaRemover}`)) {
            listaDasArrays[i].splice(indice, 1);
        }
    }
}
