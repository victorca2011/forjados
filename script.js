// Seleciona a div e atribui a uma variável
const minhaDiv = document.getElementById('minhaDiv');
const randomContainer = document.getElementById('randomContainer');


// Seleciona os áudios e armazena em um array
const audios = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3'),
    document.getElementById('audio4'),
    document.getElementById('audio5'),
    document.getElementById('audio6'),
    document.getElementById('audio7')
];
const backgroundMusic = document.querySelector('.background-music#audio');
if (backgroundMusic) {
  backgroundMusic.volume = 0.03;
}
audios.volume = 1.0;

    // Função para tocar o áudio e redirecionar após a reprodução
    function tocarAudio() {
        const meuAudio = document.getElementById('jesse');
        const meuLink = document.getElementById('meuLink');

        // Verifica se o áudio está pausado antes de tocar
        if (meuAudio.paused) {
            meuAudio.play();

            // Quando o áudio terminar, redireciona para o link
            meuAudio.onended = function() {
                window.location.href = meuLink.href;
            };
        }
    }
// Tamanho da random-div para limitar as posições dentro do randomContainer
const larguraRandomDiv = minhaDiv.offsetWidth;
const alturaRandomDiv = minhaDiv.offsetHeight;

// Limites do random-container em pixels
const limiteEsquerda = 50;
const limiteDireita = randomContainer.clientWidth - larguraRandomDiv - 50;
const limiteSuperior = 50;
const limiteInferior = randomContainer.clientHeight - alturaRandomDiv - 50;

// Função para mudar a posição da div
function mudarPosicao() {
    // Calcula posições aleatórias dentro dos limites do randomContainer
    const novaPosicaoX = limiteEsquerda + Math.random() * (limiteDireita - limiteEsquerda);
    const novaPosicaoY = limiteSuperior + Math.random() * (limiteInferior - limiteSuperior);

    // Define a nova posição usando transform para manter a transição suave
    minhaDiv.style.transform = `translate(${novaPosicaoX}px, ${novaPosicaoY}px)`;

    // Toca um áudio aleatório
    tocarAudioAleatorio();
}

// Função para tocar um áudio aleatório
function tocarAudioAleatorio() {
    // Pausa todos os áudios
    audios.forEach(audio => audio.pause());
    // Seleciona um áudio aleatório
    const audioAleatorio = audios[Math.floor(Math.random() * audios.length)];
    // Reproduz o áudio aleatório
    audioAleatorio.play();
}

// Adiciona eventos de toque para mudar a posição da div e tocar áudio
minhaDiv.addEventListener('touchstart', mudarPosicao);
minhaDiv.addEventListener('click', mudarPosicao);