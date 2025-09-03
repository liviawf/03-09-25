document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const resultArea = document.getElementById('resultArea');

    function startMission() {
        resultArea.textContent = 'Processando dados...';
        
        setTimeout(() => {
            const missionResult = processData('Análise de dados sobre o clima.');
            displayResult(missionResult);
        }, 1500); // Simula um tempo de processamento
    }

    // Função que processa os dados (pode ser mais complexa)
    function processData(data) {
        console.log("Processando a seguinte informação:", data);
        const processed = data.toUpperCase().split(' ').reverse().join(' ');
        return `Dados processados: ${processed}. Missão concluída com sucesso!`;
    }

    // Função que exibe o resultado na tela
    function displayResult(message) {
        resultArea.textContent = message;
    }

    startButton.addEventListener('click', startMission);
});