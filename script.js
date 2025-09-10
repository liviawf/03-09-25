document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "O que é Inteligência Artificial (IA)?",
            options: [
                "Um software para edição de fotos.",
                "Uma área da ciência da computação que cria máquinas capazes de 'pensar' e aprender.",
                "Um novo tipo de robô industrial.",
                "Uma linguagem de programação."
            ],
            answer: "Uma área da ciência da computação que cria máquinas capazes de 'pensar' e aprender."
        },
        {
            question: "Qual dos seguintes é um exemplo de IA que você pode usar no dia a dia?",
            options: [
                "Uma calculadora simples.",
                "Um assistente de voz como a Siri ou a Alexa.",
                "Um teclado físico de computador.",
                "Uma impressora 3D."
            ],
            answer: "Um assistente de voz como a Siri ou a Alexa."
        },
        {
            question: "A IA é usada para reconhecimento facial em celulares. Isso é verdadeiro ou falso?",
            options: [
                "Verdadeiro",
                "Falso"
            ],
            answer: "Verdadeiro"
        },
        {
            question: "Qual o principal objetivo da Inteligência Artificial?",
            options: [
                "Substituir todos os empregos humanos.",
                "Criar máquinas que parecem humanos.",
                "Resolver problemas complexos e otimizar tarefas de forma autônoma.",
                "Ganhar jogos de xadrez."
            ],
            answer: "Resolver problemas complexos e otimizar tarefas de forma autônoma."
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('enviar');
    const resultDiv = document.getElementById('resultado');

    function loadQuiz() {
        questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('pergunta');
            questionElement.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

            const optionsElement = document.createElement('div');
            q.options.forEach(option => {
                const optionLabel = document.createElement('label');
                optionLabel.innerHTML = `
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                `;
                optionsElement.appendChild(optionLabel);
            });
            questionElement.appendChild(optionsElement);
            quizContainer.appendChild(questionElement);
        });
    }

    function checkAnswers() {
        let score = 0;
        let allAnswered = true;
        const totalQuestions = questions.length;

        questions.forEach((q, index) => {
            const selector = `input[name="question${index}"]:checked`;
            const selectedOption = document.querySelector(selector);

            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    score++;
                }
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            resultDiv.textContent = 'Por favor, responda a todas as perguntas para completar a missão!';
            resultDiv.style.color = '#ff6347'; // Tom de vermelho para aviso
        } else {
            const percentage = (score / totalQuestions) * 100;
            let message = '';

            if (percentage === 100) {
                message = 'Missão completa! Você é um especialista em IA!';
                resultDiv.style.color = '#00ffff';
            } else if (percentage >= 75) {
                message = 'Ótimo trabalho! Quase lá para ser um especialista!';
                resultDiv.style.color = '#90ee90';
            } else {
                message = 'Continue estudando! Tente novamente para completar a missão.';
                resultDiv.style.color = '#ff6347';
            }

            resultDiv.textContent = `Você acertou ${score} de ${totalQuestions} perguntas. ${message}`;
        }
    }

    submitButton.addEventListener('click', checkAnswers);

    loadQuiz();
});