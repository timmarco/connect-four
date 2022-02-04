function right(gameState,columnIndex,rowIndex,winner) {
  let matches = [];

  while(true) {
    if(columnIndex == 6) { break }
    if(gameState[columnIndex + 1][rowIndex] == winner) {
      columnIndex += 1;
      matches
        .push([columnIndex,rowIndex]);

    } else {
      break;
    }
  }

  return matches;

}

export default right;
