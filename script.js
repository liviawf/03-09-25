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
            div.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(div);
    });
}

function verificarRespostas() {
    let acertos = 0;

    perguntas.forEach((item, index) => {
        const opcoes = document.getElementsByName(`pergunta${index}`);
        opcoes.forEach((opcao) => {
            if (opcao.checked && parseInt(opcao.value) === item.respostaCorreta) {
                acertos++;
            }
        });
    });

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Você acertou <strong>${acertos}</strong> de <strong>${perguntas.length}</strong> perguntas.`;

    if (acertos === perguntas.length) {
        resultado.innerHTML += "<br><span style='color: #00ff0

