
const numeroSecreto = Math.floor(Math.random() * 100) + 1;


function verificarPalpite() {
    
    const chute = document.getElementById('meuChute').value;
    const mensagem = document.getElementById('resultado');

    
    if (chute == "") {
        mensagem.textContent = "Digite um número primeiro!";
    } else if (chute == numeroSecreto) {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
        mensagem.style.color = "green";
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "Muito baixo! Tente um maior.";
        mensagem.style.color = "orange";
    } else {
        mensagem.textContent = "Muito alto! Tente um menor.";
        mensagem.style.color = "orange";
    }
}