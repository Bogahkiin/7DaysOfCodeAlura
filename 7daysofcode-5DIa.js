// Quinto desafio

// pegando as divs com as partes do html
const div1aPergunta = document.getElementById("primeira-pergunta");
const div2aPergunta = document.getElementById("segunda-pergunta");
const divFecharLista = document.getElementById("fechar-lista")
const divListaCompras = document.getElementById("lista-compras");

const listaDivs = [div1aPergunta, div2aPergunta, divFecharLista, divListaCompras]; // lista com as const das divs

const paragrafoComALista = document.getElementById("lista-final"); // paragrafo do HTML onde vai a lista no final
var itemDigitado = document.getElementById("qualcomida"); // pegando o campo de digitação
const categorias = document.getElementById('checkboxes'); // pegando as checkbox

// criando Arrays e uma lista com todos, para por os alimentos inseridos no input
let fruta = []; let carne = []; let leite = []; let doce = []; let cereais = []; let massa = []; let outro = []; 
let listaDasArrays = [fruta, carne, leite, doce, cereais, massa, outro];

let palavraParaArray; // variável para guardar o que foi digitado depois de apagar no html

// Primeira pergunta, apertando botão sim
function botaoSim () {
    div2aPergunta.classList.remove('sumir'); // faz aparecer a segunda pergunta (qual alimento quer por e o campo)
    colocaItemNaLista(); // função do preenchimento 
}

// Escrevendo o alimento pra por na lista
function colocaItemNaLista () {
    itemDigitado.addEventListener("keyup", (event) => {
        if (event.key === "Enter") { //verificando quando Enter for apertado
            document.getElementById("colocaoquedigitou").innerText = `E em qual dessas categorias você quer colocar ${itemDigitado.value}?`; // escreve pro usuário qual alimento ele inseriu e em qual categoria quer colocar
            palavraParaArray = " " + itemDigitado.value; // salva o .value para poder limpar o campo pro usuário sem perder os dados
            itemDigitado.value = ""; // limpa o campo de digitação do usuário
            categorias.classList.remove('sumir'); // aparecem as categorias
        }
    });
}

// Adicionando o alimento a uma categoria
function selecionaCategoria (e) {
    divFecharLista.classList.remove('sumir'); // faz surgir o botão para finalizar
    listaDasArrays[e].push(palavraParaArray); // coloca o valor salvo da variável (que é o que foi inserido anterioemente) numa lista
    document.getElementById(`checkbox-${e}`).checked = false; // desmarca a opção escolhida (puramente visual)
    categorias.classList.add('sumir'); // some com as categorias
}

function fecharLista () {
    divListaCompras.classList.remove('sumir'); // aparece a lista com os itens
    paragrafoComALista.innerHTML = `<b>Frutas e legumes</b><br> ${fruta}<br><b>Carnes</b><br> ${carne}<br><b>Laticínios</b><br> ${leite}<br><b>Guloseimas</b><br> ${doce}<br><b>Cereais</b><br> ${cereais}<br><b>Massas</b><br> ${massa}<br><b>Outros</b><br> ${outro}`;
    div1aPergunta.classList.add('sumir'); 
    div2aPergunta.classList.add('sumir');
    divFecharLista.classList.add('sumir');
}

function botaoNao () {
    document.getElementById("naoqueropornada").classList.remove('sumir');
    div1aPergunta.classList.add('sumir');
    div2aPergunta.classList.add('sumir');
    divFecharLista.classList.add('sumir');
    divListaCompras.classList.add('sumir')

    /* dá erro por motivos desconhecidos
    for (i = 0; listaDivs.length; i++) {
        if (listaDivs[i].classList.contains('sumir') == false){
            listaDivs[i].classList.add('sumir');
        } else {break; console.log("parou?")}
    } */
}
