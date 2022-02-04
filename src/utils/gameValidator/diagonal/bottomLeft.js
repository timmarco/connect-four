function bottomLeft(gameState,columnIndex,rowIndex,winner) {
  let matches = [];

  while(true) {
    if(columnIndex < 1) { break }
    if(rowIndex > 5) { break }
    if(gameState[columnIndex - 1][rowIndex + 1] == winner) {
      columnIndex -= 1;
      rowIndex += 1;
      matches.push([columnIndex,rowIndex])
    } else {
      break;
    }
  }

  return matches;

}
export default bottomLeft;
