keyPresses = {};

// nasluchiwanie klawiatury
function startListeningKeyboard() {
  document.addEventListener("keyup", keyUp);
  document.addEventListener("keydown", keyDown);
}

// zatrzymanie nasluchiwania klawiatury
function stopListeningKeyboard() {
  document.removeEventListener("keyup", keyUp);
  document.removeEventListener("keydown", keyDown);
}

function keyUp(e) {
  keyPresses[e.key] = false;
}

function keyDown(e) {
  keyPresses[e.key] = true;
}
