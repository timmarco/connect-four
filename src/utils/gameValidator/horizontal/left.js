function left(gameState,columnIndex,rowIndex,winner) {
  let matches = [];

  while(true) {
    if(columnIndex == 0) { break }
    if(gameState[columnIndex -1][rowIndex] == winner) {
        columnIndex -= 1;
        matches
          .push([columnIndex,rowIndex]);
    } else {
      break;
    }
  }


  return matches;

}

export default left;
