document.addEventListener('DOMContentLoaded', () => {
    const perguntas = [
        {
            pergunta: "1. O que é Inteligência Artificial?",
            opcoes: [
                "Um tipo de hardware avançado",
                "Um sistema que simula a inteligência humana",
                "Uma linguagem de programação"
            ],
            respostaCorreta: 1
        },
        {
            pergunta: "2. Qual destas é uma aplicação comum da IA?",
            opcoes: [
                "Assistentes virtuais como Alexa e Siri",
                "Refrigeração industrial",
                "Construção civil"
            ],
            respostaCorreta: 0
        },
        {
            pergunta: "3. A IA pode aprender com dados usando:",
            opcoes: [
                "Análise de redes sociais",
                "Machine Learning",
                "Computadores antigos"
            ],
            respostaCorreta: 1
        }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const enviarBotao = document.getElementById("enviar");
    const resultadoDiv = document.getElementById("resultado");

    function carregarPerguntas() {
        perguntas.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("pergunta");

            const titulo = document.createElement("h3");
            titulo.textContent = item.pergunta;
            div.appendChild(titulo);

            item.opcoes.forEach((opcao, i) => {
                const label = document.createElement("label");
                label.innerHTML = `
                    <input type="radio" name="pergunta${index}" value="${i}"> ${opcao}
                `;
                div.appendChild(label);
            });

            quizContainer.appendChild(div);
        });
    }

    function verificarRespostas() {
        let acertos = 0;
        let todasRespondidas = true;

        perguntas.forEach((item, index) => {
            const opcoes = document.getElementsByName(`pergunta${index}`);
            let respondida = false;
            opcoes.forEach((opcao) => {
                if (opcao.checked) {
                    respondida = true;
                    if (parseInt(opcao.value) === item.respostaCorreta) {
                        acertos++;
                    }
                }
            });
            if (!respondida) {
                todasRespondidas = false;
            }
        });

        if (!todasRespondidas) {
            resultadoDiv.textContent = "Por favor, responda a todas as perguntas para completar a missão!";
            resultadoDiv.style.color = "#ff6347";
        } else {
            resultadoDiv.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.`;

            if (acertos === perguntas.length) {
                resultadoDiv.innerHTML += "<br><span>Parabéns! Missão completa!</span>";
                resultadoDiv.style.color = "#00ffff"; // Cor para 100% de acerto
            } else {
                resultadoDiv.innerHTML += "<br><span>Continue estudando para dominar a IA!</span>";
                resultadoDiv.style.color = "#ff6347"; // Cor para acertos parciais
            }
        }
    }

    // Associa a função ao clique do botão
    enviarBotao.addEventListener("click", verificarRespostas);

    // Carrega as perguntas quando a página é carregada
    carregarPerguntas();
});