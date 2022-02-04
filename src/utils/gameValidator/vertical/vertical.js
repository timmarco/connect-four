function vertical(gameState,columnIndex,rowIndex,winner) {
  let matches = [[columnIndex,rowIndex]];

  if(rowIndex > 1) { return null }
  while(true) {
    if(rowIndex == 0) { break }
    if(gameState[columnIndex][rowIndex + 1] == winner) {
      rowIndex += 1;
      matches
        .push([columnIndex,rowIndex]);
    } else {
      break;
    }
  }

  if(matches.length > 3) { return matches; }

  return [];

}

export default vertical;
