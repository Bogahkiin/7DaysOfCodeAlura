// Último dia

// pegando elementos do html
const paragrafoDigitosCalculadora = document.getElementById("texto-calculadora");
const botoesOperacoes = document.querySelectorAll('.botaooperacao');

// guardando os números
var primeiroNum = [];
var segundoNum = [];
var resultadoNum;

// guardando qual operação será feita
var qualOperacao;

// criando variáveis para condição
var operacaoFoiEscolhida = false;
var digitou1oNumero = false;

// primeiro número apertado
function apertouNumero (n) {
    if (digitou1oNumero == false) {
        paragrafoDigitosCalculadora.innerText = n;
        primeiroNum += n;
        digitou1oNumero = true;
    } else {segundoNumero(n)}
}

// segundo número em diante
function segundoNumero (x) {
    if (digitou1oNumero == true && operacaoFoiEscolhida == false) { // caracteres do primeiro número
        paragrafoDigitosCalculadora.innerText += x;
        primeiroNum += x;
        }
    if (operacaoFoiEscolhida == true) { // caracteres do segundo número
        paragrafoDigitosCalculadora.innerText += x;
        segundoNum += x;
    }
}

// operação escolhida (divisão, multiplicação, subtração e soma)
function botaoOperacao (p) {
        qualOperacao = p;
        operacaoFoiEscolhida = true;
        switch (p) {
            case 0:
                paragrafoDigitosCalculadora.innerText += '/ ';
                break;
            case 1:
                paragrafoDigitosCalculadora.innerText += 'x';
                break;
            case 2:
                paragrafoDigitosCalculadora.innerText += '-';
                break;
            case 3:
                paragrafoDigitosCalculadora.innerText += '+';
                break;
        }
}

// fazendo a conta e dando o resultado
function resultado (q) {
    if (q == 1) {
        let num1 = parseInt(primeiroNum);
        let num2 = parseInt(segundoNum);

        switch (qualOperacao) {
            case 0: {
                resultadoNum = num1/num2;
                break;
            }
            case 1: {
                resultadoNum = num1*num2;
                break;
            }
            case 2: {
                resultadoNum = num1-num2;
                break;
            }
            case 3: {
                resultadoNum = num1+num2;
                break;
            }
        }
        paragrafoDigitosCalculadora.innerText = resultadoNum;
    } else { // botao AC apaga tudo
    paragrafoDigitosCalculadora.innerText = 0;
    }
    digitou1oNumero = false;
    operacaoFoiEscolhida = false;
    num1=0;num2=0;primeiroNum=[];segundoNum=[];
}

