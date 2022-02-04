import bottomLeft from './bottomLeft.js';
import bottomRight from './bottomRight.js';
import topLeft from './topLeft.js';
import topRight from './topRight.js';

function diagonal(gameState,columnIndex,rowIndex,winner) {
  let matches = [];

  const topRightMatches = topRight(gameState,columnIndex,rowIndex,winner);
  const bottomLeftMatches = bottomLeft(gameState,columnIndex,rowIndex,winner);
  const upAndRight = bottomLeftMatches.concat([[columnIndex,rowIndex]]).concat(topRightMatches);
  if(upAndRight.length > 3) {
    matches
      .push(upAndRight);
  }


  const topLeftMatches = topLeft(gameState,columnIndex,rowIndex,winner);
  const bottomRightMatches = bottomRight(gameState,columnIndex,rowIndex,winner);
  const downAndRight = topLeftMatches.concat([[columnIndex,rowIndex]]).concat(bottomRightMatches);

  if(downAndRight.length > 3) {
    matches
      .push(downAndRight);
  }

  if(matches.length > 0) { return matches }

  return [];
}

export default diagonal;
