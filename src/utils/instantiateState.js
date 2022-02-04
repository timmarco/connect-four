import * as d3 from 'd3';

function InstantiateGameState() {
  let gameState = [];
  d3.range(0,7)
    .forEach((column) => {
      let stateColumn = [];
      d3.range(0,6)
        .forEach((row) => {
          stateColumn.push("empty");
        });
      gameState.push(stateColumn);
    });

    return gameState;
}

export default InstantiateGameState;
