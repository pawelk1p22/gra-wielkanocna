let startTime;

function startGame() {
  isPlaying = true;
  changeMusic();

  initBunnySpeed = bunnySpeed = parseInt(bunnySpeedInput.value);
  initEggSpeed = eggSpeed = parseFloat(eggSpeedInput.value);
  initLivesCount = lives = parseInt(livesInput.value);
  initEggRenderSpeed = eggRenderSpeed = parseFloat(eggRenderSpeedInput.value);

  menu.style.display = "none";
  c.style.display = "block";
  paused = false;

  score = 0;

  interval = setInterval(generateEgg, parseFloat(eggRenderSpeed * 1000));

  startTime = Date.now();

  requestAnimationFrame(update);
}
