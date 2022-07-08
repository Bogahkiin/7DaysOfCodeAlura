//Primeiro dia

function primeiroDia () {
    
    let numeroUm = 1;
    let stringUm = '1';
    let numeroTrinta = 30;
    let stringTrinta = '30';
    let numeroDez = 10;
    let stringDez = '10';

    if (numeroUm == stringUm && numeroTrinta === stringTrinta && numeroDez == stringDez) { // junto ficou confuso
    alert('Só sabendo o desafio para entender, mas: As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo. As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.');
    } else {
    alert('As variáveis numeroUm e stringUm não tem o mesmo valor. As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo. As variáveis numeroDez e stringDez não tem o mesmo valor.');
    }
}

// Quarto dia

var numeroASerDescoberto;
var escolhaNumero; 

function numeroAleatório (min, max) {
    min = Math.ceil(1);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min)) + min;
}

function quartoDia () {
    numeroASerDescoberto = numeroAleatório ();
    escolhaNumero = prompt("Tente adivinhar! Escolha um número entre 1 e 10.");
    if (escolhaNumero == numeroASerDescoberto) {            
        alert(`Acertou! Era mesmo o ${numeroASerDescoberto}!`);
    } 
    if (escolhaNumero != numeroASerDescoberto) {
        segundaTentativa ();
    }
}

function segundaTentativa () {
    let tenteOutraVez = prompt("Errou, tente novamente!");
    if (tenteOutraVez == numeroASerDescoberto) {
        alert(`Agora acertou, era ${numeroASerDescoberto} mesmo!`);
        numeroAleatório ();
    }
    if (tenteOutraVez != numeroASerDescoberto) {
        alert(`Errou tudo agora ein! A resposta é ${numeroASerDescoberto}.`);
        numeroAleatório ();
    }
}
