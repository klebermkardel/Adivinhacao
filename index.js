// Gera um número aleatório entre 1 e 100 
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1; // Corrigi para incluir o número 100
}

// Inicializa o jogo
function startGame() {
    let textTentativas = document.getElementById('textTentativas');
    textTentativas.textContent = "Você possui 3 tentativas";
    let feedback = document.getElementById('feedback');
    feedback.textContent = "";

    // Retorna o número aleatório gerado
    return getRandomNumber();
}

// Chama a função startGame para definir o número aleatório e as tentativas iniciais
let randomNumber = startGame();

// Função principal para adivinhar o número
function guessNumber() {
    let chosenNumber = parseInt(document.getElementById('tentativa').value);
    let textTentativas = document.getElementById('textTentativas');
    let feedback = document.getElementById('feedback');

    // Lógica para verificar se o número escolhido é correto
    if (chosenNumber !== randomNumber) {
        let tentativas = parseInt(textTentativas.textContent.match(/\d+/));
        tentativas--;

        if (tentativas === 0) {
            textTentativas.textContent = "Você não possui mais tentativas";
            feedback.style.color = "#990000";
            feedback.textContent = "Você perdeu! O número correto era: " + randomNumber;
        } else {
            textTentativas.textContent = `Você possui ${tentativas} tentativas`;
            feedback.style.color = "#990000";
            feedback.textContent = "Poxa, você errou! Tente novamente!";
        }
    } else {
        textTentativas.style.visibility = "hidden";
        feedback.style.color = "#009900";
        feedback.textContent = "Parabéns! Você acertou!";
    }
}