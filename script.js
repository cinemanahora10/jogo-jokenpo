// PASSO 4.1: SELEÇÃO DOS ELEMENTOS E VARIÁVEIS INICIAIS

// Seleciona todos os botões que têm a classe 'opcao'. Retorna uma lista de elementos.
const botoesEscolha = document.querySelectorAll('.opcao');

// Seleciona os elementos do placar pelo seu ID.
const spanEscolhaJogador = document.getElementById('escolha-jogador');
const spanEscolhaPC = document.getElementById('escolha-pc');
const mensagemFinal = document.getElementById('mensagem-final');

// Seleciona o botão de reiniciar pelo seu ID.
const botaoReiniciar = document.getElementById('reiniciar');

// Define um array com as opções válidas para o jogo.
const opcoes = ['pedra', 'papel', 'tesoura'];

// PASSO 4.2: FUNÇÕES PRINCIPAIS DA LÓGICA DO JOGO

// Função para o computador fazer uma escolha aleatória a partir do array 'opcoes'.
function gerarEscolhaPC() {
    // Gera um número aleatório entre 0 e 2 (correspondente aos índices do array).
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    // Retorna a string ('pedra', 'papel' ou 'tesoura') na posição sorteada.
    return opcoes[indiceAleatorio];
}

// Função que compara as escolhas e retorna o resultado.
function verificarVencedor(escolhaJogador, escolhaPC) {
    if (escolhaJogador === escolhaPC) {
        return "Empate!";
    } else if (
        (escolhaJogador === 'pedra' && escolhaPC === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaPC === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaPC === 'papel')
    ) {
        // Se qualquer uma das condições de vitória do jogador for verdadeira...
        return "Você Venceu!";
    } else {
        // Se não empatou e o jogador não venceu, então ele perdeu.
        return "Você Perdeu!";
    }
}

// PASSO 4.3: ADICIONANDO OS EVENT LISTENERS PARA INTERATIVIDADE

// Itera sobre cada um dos botões de escolha para adicionar um evento de clique.
botoesEscolha.forEach(botao => {
    botao.addEventListener('click', () => {
        // Quando um botão é clicado, o jogo começa.

        // 1. Pega a escolha do jogador do atributo 'data-choice' do botão.
        const escolhaJogador = botao.dataset.choice;
        
        // 2. Chama a função que gera a escolha aleatória do PC.
        const escolhaPC = gerarEscolhaPC();
        
        // 3. Chama a função que compara as escolhas e retorna o resultado.
        const resultado = verificarVencedor(escolhaJogador, escolhaPC);
        
        // 4. Atualiza o conteúdo do HTML para mostrar o que aconteceu no jogo.
        spanEscolhaJogador.textContent = escolhaJogador;
        spanEscolhaPC.textContent = escolhaPC;
        mensagemFinal.textContent = resultado;
    });
});

// Adiciona um evento de clique ao botão de reiniciar.
botaoReiniciar.addEventListener('click', () => {
    // Restaura os textos para o estado inicial do jogo.
    spanEscolhaJogador.textContent = '--';
    spanEscolhaPC.textContent = '--';
    mensagemFinal.textContent = 'Escolha uma opção para começar!';
});