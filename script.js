function iniciarMissao() {
    const descricao = document.getElementById("descricao");
    const missao = document.getElementById("missao");

    descricao.textContent = "Missão iniciada: sua tarefa é criar um modelo de IA capaz de ajudar pessoas com dificuldades de aprendizagem.";

    missao.classList.remove("oculto");
    missao.innerHTML = `
        <h2>Desafio 1:</h2>
        <p>Pesquise e descreva como a IA pode ser usada na educação inclusiva. Em seguida, clique no botão abaixo para concluir esta etapa.</p>
        <button onclick="concluirMissao()">Concluir Etapa</button>
    `;
}

function concluirMissao() {
    const missao = document.getElementById("missao");
    missao.innerHTML = `
        <h2>Parabéns!</h2>
        <p>Você completou a primeira etapa da missão. Continue explorando o universo da inteligência artificial para transformar o mundo!</p>
    `;
}
