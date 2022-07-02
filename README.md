# 7DaysOfCodeAlura

<p>Desafio de lógica de programação com javascript proposto pela Alura para fixar os conhecimentos aprendidos nos cursos.
Além disso, também está servindo para aprender a utilizar Git e GitHub.</p>

## Dia 1
<p align="justify">Verificar a lógica de comparadores de um curto pedaço de código. Onde == verifica se dois elementos são semelhantes e retorna true (1 = '1', o número retorna como igual a um texto 1) e === verifica se são identicos, nesse exemplo anterior retornia falso, pois um deles é um texto e o outro não.
Para isso precisou apenas acertar os parâmetros do if, as variáveis já estavam dadas, e se utilizou o console.log para verificar se estava correto.</p>

## Dia 2
<p align="justify">Fazer com que uma página seja levemente dinâmica utilizando javascript para armazenar e reutilizar dados inseridos na página e ao preencher os dados (nome, idade) e apertar para enviar, aparece uma mensagem com esses dados. Também teve um desafio opcional que consistia em mais uma mensagem com pergunta sim ou não com mais uma resposta dinamica baseado no que o usuário inseriu na página.
Aqui criei várias const para utilizar os elementos do HTML com document.getElementbyId(), após isso é verificado se botão foi aperta com .onclick que iniciava a função que com .innerText escrevia o texto de acordo com o que foi inserido na página fazia o texto da pergunta opcional aparecer novamente com o .classList.remove (que remove um estilo no CSS que deixava o texto escondido). O desafio opcional foi feito de forma semelhante, porém com um botão para cada resposta (sim e não) e uma resposta personalizada para cada uma das escolhas.</p>
<p align="center">
<img width="420px" height="465.5px" src="https://user-images.githubusercontent.com/63385341/176802494-b9528d63-5e06-4ae4-93b3-df4a2b062963.gif">
</p>

## Dia 3
<p align="justify">Propor diferentes caminhos para o usuário com base em suas escolhas. O tema é programação, há duas opções inciais front-end e back-end e para cada uma delas há uma interação diferente: ao escolher front-end é mostrado as opções de React e Vue, já para o back-end, Java e C#. E no fim, após algumas outras perguntas o usuário pode preencher um campo dizendo quais tecnologias ele quer conhecer, ao preencher e adicionar a palavra escrita ela aparece embaixo. É possível escrever e adicionar infinitos termos (era uma das propostas do desafio), elas se somam conforme são adicionadas e mantém a formatação.
Para atingir o proposto (e de uma forma diferente da solução do dia anterior para fins de aprendizado) foi criada uma função em cada botão do html, sendo a mesma função para todos, porém com parâmetros diferentes. Se utilizando do for foi possível fazer essa verificação e transformar em números que servem de parâmetro para outra função cujo objetivo era fazer surgir os textos e opções novas baseados na escolha anterior do usuário. O funcionamento é semelhante a função anterior, mas contando apenas com if e else: o parâmetro é comparado com os índices de uma lista e com base nesses números o texto correto surge na tela (tem seu estilo display:none removido). Foi adicionado uma redundância aqui para que em caso de apertar os dois botões de uma mesma opção, o texto do apertado anteriormente desaperece, dando lugar ao correto. Por fim, utilizando .value para obter o que foi escrito no último campo de resposta e com .innerText para escrever em um paragráfo vazio, a lista com as tecnologias que se deseja conhecer é construída, somando a nova palavra com o que já foi escrito anteriormente.</p>
<p align="center">
<img width="420px" height ="465.5px" src="https://user-images.githubusercontent.com/63385341/176984767-9e92decf-5cd7-49ac-9307-a81dce40e8b7.gif">
</p>
