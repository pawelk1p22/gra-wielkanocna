function update() {
  if (!paused) {
    draw();
    startListeningKeyboard();
    bunny.update();
    updateEggs();
    requestAnimationFrame(update);
  }
}
