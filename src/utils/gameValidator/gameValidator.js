import horizontal from './horizontal/horizontal.js';
import vertical from './vertical/vertical.js';
import diagonal from './diagonal/diagonal.js';

function gameValidator(gameState,columnIndex,rowIndex,winner) {
  let horizontalMatches = horizontal(gameState,columnIndex,rowIndex,winner);
  let verticalMatches = vertical(gameState,columnIndex,rowIndex,winner);
  let diagonalMatches = diagonal(gameState,columnIndex,rowIndex,winner);

  return horizontalMatches
    .concat(verticalMatches)
    .concat(diagonalMatches.flat());
}

export default gameValidator;
