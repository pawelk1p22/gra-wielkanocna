function displayScores() {
  const scoresOutput = document.getElementById("scoresOutput");
  scoresOutput.innerHTML = "";

  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (scores.length === 0) {
    scoresOutput.innerHTML = "<p>Brak zapisanych wyników.</p>";
    clearScoresButton.style.display = "none";
    return;
  }

  const reversedScores = scores.slice().reverse();

  const table = document.createElement("table");
  table.classList.add("score-table");

  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
      <tr>
        <th>Szybkość królika</th>
        <th>Szybkość jajek</th>
        <th>Liczba żyć</th>
        <th>Wynik</th>
        <th>Prędkość tworzenia jaj</th>
        <th>Czas gry</th>
        <th>Data</th>
      </tr>
    `;
  table.appendChild(tableHeader);

  const tableBody = document.createElement("tbody");
  reversedScores.forEach((scoreInfo) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${scoreInfo.bunnySpeed}</td>
        <td>${scoreInfo.eggSpeed}</td>
        <td>${scoreInfo.livesCount}</td>
        <td>${scoreInfo.score}</td>
        <td>${scoreInfo.eggRenderSpeed}</td>
        <td>${scoreInfo.elapsedTime / 1000}</td>
        <td>${new Date(scoreInfo.date).toLocaleString()}</td>
      `;
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);

  scoresOutput.appendChild(table);

  clearScoresButton.style.display = "block";
}
