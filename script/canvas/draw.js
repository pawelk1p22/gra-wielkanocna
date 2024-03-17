function draw() {
  ctx.clearRect(0, 0, c.width, c.height);

  ctx.drawImage(backgroundImg, 0, 0, c.width, c.height);

  bunny.draw();

  eggs.forEach((egg) => {
    egg.draw();
  });

  currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  ctx.fillText("Punkty: " + score, canvas.width / 2, 40);

  if (!paused) {
    ctx.fillText("Czas: " + (elapsedTime / 1000).toFixed(2) + "s", 100, 40);
  }

  ctx.fillText("Życia: " + lives, c.width - 80, 40);
}
