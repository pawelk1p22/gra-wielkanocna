function updateEggs() {
  eggs.forEach((egg, index) => {
    egg.update();
    egg.draw();
    if (egg.y + egg.height >= c.height) {
      egglostAudio.play();
      eggs.splice(index, 1);
      --lives;
      if (lives == 1) {
        oneLiveAudio.play();
      }

      if (lives <= 0) {
        stopGame();
      }
    }
  });
}
