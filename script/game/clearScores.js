const clearScoresButton = document.getElementById("clearScoresButton");

clearScoresButton.addEventListener("click", () => {
  clearScores();
});

function clearScores() {
  localStorage.setItem("scores", null);
  scoresOutput.innerHTML = "<p>Brak zapisanych wyników.</p>";

  clearScoresButton.style.display = "none";
}
