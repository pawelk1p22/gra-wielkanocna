function togglePause() {
  paused = !paused;

  startTime = Date.now() - elapsedTime;

  if (paused) {
    stopListeningKeyboard();
  } else {
    startListeningKeyboard();
    requestAnimationFrame(update);
  }
}
