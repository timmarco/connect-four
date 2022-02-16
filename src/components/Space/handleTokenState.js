import emptyToken from './emptyToken.js';
import winningToken from './winningToken.js';
import botToken from './botToken.js';
import playerToken from './playerToken.js';
import losingToken from './losingToken.js';

function handleTokenState(groupReference,props) {
  switch(props.tokenState) {
    case "empty":
      emptyToken(groupReference);
      break;
    case "bot":
      botToken(groupReference,props.row);
      break;
    case "player":
      playerToken(groupReference,props.row);
      break;
    case "winner":
      winningToken(groupReference);
      break;
    case "loser":
      losingToken(groupReference);
      break;
  }
}

export default handleTokenState;
