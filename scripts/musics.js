function $(id) { return document.getElementById(id); };
const media = $('audio');

let ui = {
  play: 'playAudio',
  audio: 'audio',
  percentage: 'percentage',
  seekObj: 'seekObj',
  currentTime: 'currentTime',
  volumeControl: 'volumeControl', // Controle de volume
  volumeIcon: 'volumeIcon' // Ícone de volume
};

function togglePlay() {
  if (!media.paused) {
    media.pause();
    $(ui.play).classList.remove('pause');
  } else {
    media.play();
    $(ui.play).classList.add('pause');
  }
}

function calculatePercentPlayed() {
  let percentage = (media.currentTime / media.duration).toFixed(2) * 100;
  $(ui.percentage).style.width = `${percentage}%`;
}

function calculateCurrentValue(currentTime) {
  const currentMinute = parseInt(currentTime / 60) % 60;
  const currentSecondsLong = currentTime % 60;
  const currentSeconds = currentSecondsLong.toFixed();
  const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
    currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
  }`;
  
  return currentTimeFormatted;
}

function initProgressBar() {
  const currentTime = calculateCurrentValue(media.currentTime);
  $(ui.currentTime).innerHTML = currentTime;
  $(ui.seekObj).addEventListener('click', seek);

  media.onended = () => {
    $(ui.play).classList.remove('pause');
    $(ui.percentage).style.width = 0;
    $(ui.currentTime).innerHTML = '00:00';
  };

  function seek(e) {
    const percent = e.offsetX / this.offsetWidth;
    media.currentTime = percent * media.duration;
  }
  
  calculatePercentPlayed();
}

// Função para definir o volume
function setVolume() {
  media.volume = $(ui.volumeControl).value;
}

// Função para mostrar/ocultar o controle de volume
function toggleVolumeControl() {
  const volumeControl = $(ui.volumeControl);
  if (volumeControl.style.display === 'none' || volumeControl.style.display === '') {
    volumeControl.style.display = 'block';
  } else {
    volumeControl.style.display = 'none';
  }
}

// Eventos
$(ui.play).addEventListener('click', togglePlay);
$(ui.audio).addEventListener('timeupdate', initProgressBar);
$(ui.volumeControl).addEventListener('input', setVolume);
$(ui.volumeIcon).addEventListener('click', toggleVolumeControl);

// Definindo volume inicial
media.volume = 0.03;
