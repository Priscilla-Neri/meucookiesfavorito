// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

// Função para falar mensagens
function falar(texto) {
    responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}

window.onload = function () {
    let mensagemInicial = "Bem-vindo ao jogo do número secreto! Por favor, insira um número entre 1 e 100.";
    document.querySelector(".texto__paragrafo").textContent = "Escolha um número entre 1 a 100";
    falar(mensagemInicial);
};

// Função para verificar o chute do usuário
function verificarChute() {
    let inputUsuario = document.querySelector(".container__input");
    let numeroUsuario = parseInt(inputUsuario.value);
    let mensagem = document.querySelector(".texto__paragrafo");

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        mensagem.textContent = "Por favor, insira um número entre 1 e 100!";
        falar("Por favor, insira um número entre 1 e 100!");
        return;
    }

    tentativas++;

    if (numeroUsuario === numeroSecreto) {
        let textoFinal = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        mensagem.textContent = textoFinal;
        falar(textoFinal);
        document.querySelector("#reiniciar").disabled = false; // Habilita o botão de reiniciar
    } else if (numeroUsuario < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior!";
        falar("O número secreto é maior!");
    } else {
        mensagem.textContent = "O número secreto é menor!";
        falar("O número secreto é menor!");
    }

    // Limpa o input
    inputUsuario.value = "";
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    let mensagemInicial = "Escolha um número entre 1 a 100";
    document.querySelector(".texto__paragrafo").textContent = mensagemInicial;
    document.querySelector(".container__input").value = "";
    document.querySelector("#reiniciar").disabled = true;
    falar(mensagemInicial);
}
