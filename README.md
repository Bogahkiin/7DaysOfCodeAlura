# 7DaysOfCodeAlura

Desafio de lógica de programação com javascript proposto pela Alura para fixar os conhecimentos aprendidos nos cursos.
Além disso, também está servindo para aprender a utilizar Git e GitHub.

# Dia 1
Verificar a lógica de comparadores de um curto pedaço de código. Onde == verifica se dois elementos são semelhantes e retorna true (1 = '1', o número retorna como igual a um texto 1) e === verifica se são identicos, nesse exemplo anterior retornia falso, pois um deles é um texto e o outro não.
Para isso precisou apenas acertar os parâmetros do if, as variáveis já estavam dadas, e se utilizou o console.log para verificar se estava correto.

# Dia 2
Fazer com que uma página seja levemente dinâmica utilizando javascript para armazenar e reutilizar dados inseridos na página e ao preencher os dados (nome, idade) e apertar para enviar, aparece uma mensagem com esses dados. Também teve um desafio opcional que consistia em mais uma mensagem com pergunta sim ou não com mais uma resposta dinamica baseado no que o usuário inseriu na página.
Aqui criei várias const para utilizar os elementos do HTML com document.getElementbyId, após isso é verificado se botão foi aperta com .onclick que iniciava a função que com .innerHTML escrevia o texto de acordo com o que foi inserido na página fazia o texto da pergunta opcional aparecer novamente com o .classList.remove (que remove um estilo no CSS que deixava o texto escondido). O desafio opcional foi feito de forma semelhante, porém com um botão para cada resposta (sim e não) e uma resposta personalizada para cada uma das escolhas.