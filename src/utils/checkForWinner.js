import gameValidator from './gameValidator/gameValidator.js';

function checkForWinner(stateCopy,selectionHistory,whichPlayer) {
  const column = selectionHistory[selectionHistory.length - 1];
  const row = stateCopy[column].lastIndexOf("empty") + 1;
  const results = gameValidator(stateCopy,column,row,whichPlayer);

  const checkForTie = stateCopy.flat().find(element => element === "empty");

  if(checkForTie === undefined) {
    return {"winner":"tie"}
  }

  if(results.length == 0) {
    return {"winner":undefined}
  } else {
    return {"winner":whichPlayer,"results":results}
  }
}

export default checkForWinner;
