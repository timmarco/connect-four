import left from './left.js';
import right from './right.js';

function horizontal(gameState,columnIndex,rowIndex,winner) {
  let matches = null;

  const checkLeft = left(gameState,columnIndex,rowIndex,winner);
  const checkRight = right(gameState,columnIndex,rowIndex,winner);

  const fullLine = checkLeft
    .concat([[columnIndex,rowIndex]])
    .concat(checkRight);

  if(fullLine.length > 3) { return fullLine; }

  return [];

}

export default horizontal;
