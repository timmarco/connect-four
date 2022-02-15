function above(gameState,columnIndex,rowIndex,winner) {
  let matches = [];

  while(true) {
    if(rowIndex == 0) { break }
    if(gameState[columnIndex][rowIndex - 1] == winner) {
        rowIndex -= 1;
        matches
          .push([columnIndex,rowIndex]);
    } else {
      break;
    }
  }


  return matches;

}

export default above;
