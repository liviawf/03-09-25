document.addEventListener('DOMContentLoaded', () => {
    const iniciarMissaoBtn = document.getElementById('iniciarMissao');
    const secaoIntroducao = document.getElementById('introducao');
    const secaoMissao = document.getElementById('missao');
    const secaoResultado = document.getElementById('resultado');
    const textoMissao = document.getElementById('textoMissao');
    const feedback = document.getElementById('feedback');
    const proximaFaseBtn = document.getElementById('proximaFase');
    const mensagemResultado = document.getElementById('mensagemResultado');
    const reiniciarBtn = document.getElementById('reiniciar');
    const opcoesBtns = document.querySelectorAll('.opcao');

    let progressoMissao = 0; // 0: Introdução, 1: Fase 1, 2: Resultado

    // Funções para controlar a exibição das seções
    function mostrarSecao(secao) {
        secaoIntroducao.classList.add('escondido');
        secaoMissao.classList.add('escondido');
        secaoResultado.classList.add('escondido');
        secao.classList.remove('escondido');
    }

    // Iniciar Missão
    iniciarMissaoBtn.addEventListener('click', () => {
        mostrarSecao(secaoMissao);
        progressoMissao = 1;
        atualizarInterfaceMissao();
    });

    // Atualizar interface da missão
    function atualizarInterfaceMissao() {
        if (progressoMissao === 1) {
            textoMissao.textContent = "Nexus precisa de dados para aprender. Escolha a fonte de dados mais adequada para treiná-lo em reconhecimento de padrões.";
            feedback.textContent = "";
            proximaFaseBtn.classList.add('escondido');
            opcoesBtns.forEach(btn => btn.style.display = 'inline-block'); // Mostrar botões de opção
        }
    }

    // Lidar com as opções da missão
    opcoesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const escolha = btn.getAttribute('data-valor');
            let respostaCorreta = false;
            let mensagemFeedback = "";

            // Lógica da missão (simulada)
            if (progressoMissao === 1) {
                if (escolha === 'imagem') { // Exemplo: IA de reconhecimento de imagem
                    respostaCorreta = true;
                    mensagemFeedback = "Excelente escolha! Dados visuais são ideais para treinar o reconhecimento de padrões em imagens.";
                } else {
                    mensagemFeedback = `Hmm, ${escolha} pode não ser a melhor opção para esta tarefa específica de reconhecimento de padrões visuais. Tente novamente.`;
                }
                feedback.textContent = mensagemFeedback;

                if (respostaCorreta) {
                    proximaFaseBtn.classList.remove('escondido');
                    opcoesBtns.forEach(opt => opt.style.display = 'none'); // Esconder botões de opção
                }
            }
        });
    });

    // Próxima Fase
    proximaFaseBtn.addEventListener('click', () => {
        progressoMissao = 2;
        mostrarSecao(secaoResultado);
        exibirResultado();
    });

    // Exibir resultado da missão
    function exibirResultado() {
        if (progressoMissao === 2) {
            // Lógica para determinar o resultado da missão (pode ser mais complexa)
            const sucesso = Math.random() > 0.3; // 70% de chance de sucesso simulado

            if (sucesso) {
                mensagemResultado.textContent = "Missão bem-sucedida! O algoritmo Nexus foi treinado com sucesso e está pronto para aplicações éticas. Bom trabalho, Agente!";
                mensagemResultado.style.color = "#4CAF50"; // Verde
            } else {
                mensagemResultado.textContent = "Falha na missão. O treinamento do Nexus apresentou falhas críticas. A segurança da IA foi comprometida. Reavalie suas escolhas.";
                mensagemResultado.style.color = "#f44336"; // Vermelho
            }
        }
    }

    // Reiniciar Missão
    reiniciarBtn.addEventListener('click', () => {
        progressoMissao = 0;
        mostrarSecao(secaoIntroducao);
        feedback.textContent = "";
    });

    // Inicializar a página
    mostrarSecao(secaoIntroducao);
});