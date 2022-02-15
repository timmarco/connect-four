function gameOverStateGenerator(results,gameState) {
  results.forEach((result) => {
    if(result == null) { return };
    gameState[result[0]][result[1]] = "winner";
  });


  gameState.forEach((column,columnIndex) => {
    gameState.forEach((row,rowIndex) => {
      if(gameState[columnIndex][rowIndex] == "player" || gameState[columnIndex][rowIndex] == "bot") {
        gameState[columnIndex][rowIndex] = "loser";
      }
    })
  });

  return gameState;
}

export default gameOverStateGenerator;
