function stopGame() {
  isPlaying = false;
  changeMusic();

  gameoverAudio.play();

  c.style.display = "none";
  menu.style.display = "block";

  if (initBunnySpeed == 5) initBunnySpeed = "Wolny";
  else if (initBunnySpeed == 10) initBunnySpeed = "Normalny";
  else initBunnySpeed = "Szybki";

  if (initEggSpeed == 3) initEggSpeed = "Wolny";
  else if (initEggSpeed == 3.5) initEggSpeed = "Normalny";
  else initEggSpeed = "Szybki";

  // obiekt wynik
  const scoreInfo = {
    bunnySpeed: initBunnySpeed,
    eggSpeed: initEggSpeed,
    livesCount: initLivesCount,
    score: score,
    eggRenderSpeed: initEggRenderSpeed,
    elapsedTime: elapsedTime,
    date: Date.now(),
  };

  // zapis do localstorage
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores = [...scores, scoreInfo];
  localStorage.setItem("scores", JSON.stringify(scores));

  cancelAnimationFrame(update);
  paused = true;
  eggs.length = 0;

  clearInterval(interval);

  displayScores();
}
