musicInput.addEventListener("change", () => {
  if (musicInput.value == "yes") playMusic = true;
  else playMusic = false;

  changeMusic();
});

function changeMusic() {
  if (playMusic && isPlaying) {
    mainAudio.pause();
    songAudio.play();
  }
  if (playMusic && isPlaying == false) {
    songAudio.pause();
    mainAudio.play();
  }

  if (!playMusic) {
    songAudio.pause();
    mainAudio.pause();
  }
}
