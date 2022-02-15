import above from './above.js';
import below from './below.js';

function vertical(gameState,columnIndex,rowIndex,winner) {
  let matches = null;

  const checkAbove = above(gameState,columnIndex,rowIndex,winner);
  const checkBelow = below(gameState,columnIndex,rowIndex,winner);

  const fullLine = checkAbove
    .concat([[columnIndex,rowIndex]])
    .concat(checkBelow);

  if(fullLine.length > 3) { return fullLine; }

  return [];

}

export default vertical;
