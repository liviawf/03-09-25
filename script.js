// Obtém o elemento do botão e da área de resultado
const botaoIniciar = document.getElementById('iniciarMissao');
const areaResultado = document.getElementById('resultado');

// Declara a função para a missão de IA
function iniciarMissaoIA() {
    // Declara uma variável para armazenar a resposta da IA
    let respostaIA = "Análise de dados concluída. Padrões identificados: crescimento de 15% na eficiência do sistema.";

    // Exibe a resposta na tela
    areaResultado.textContent = respostaIA;
}

// Adiciona um "ouvinte de evento" ao botão
// Quando o botão é clicado, a função iniciarMissaoIA é chamada
botaoIniciar.addEventListener('click', iniciarMissaoIA);