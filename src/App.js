import './styles/App.css';
import './styles/overlay.css';
import './styles/board.css';
import './styles/header.css';
import {useState} from 'react';

import instantiateGameState from './utils/instantiateState.js';
import gameValidator from './utils/gameValidator/gameValidator.js';
import urlConstructor from './utils/urlConstructor.js';
import sparkDelight from './utils/sparkDelight.js';
import resetSvgs from './utils/resetSvgs.js'

import Board from './components/Board.js';
import ResetGameButton from './components/ResetGameButton.js';

import StartGameOverlay from './overlays/StartGameOverlay.js';
import GameOverOverlay from './overlays/GameOverOverlay.js';
import BotThinkingOverlay from './overlays/BotThinkingOverlay.js';
import DifficultyOverlay from './overlays/DifficultyOverlay.js';

function App() {
  const [gameState,setGameState] = useState(instantiateGameState());
  const [selectionHistory,setSelectionHistory] = useState([]);
  const [waiting,setWaiting] = useState(false);
  const [gameWinner,setGameWinner] = useState(undefined);
  const [gameIsOver,setGameIsOver] = useState(false);
  const [difficulty,setDifficulty] = useState(undefined);
  const [playerId,setPlayerId] = useState(1);
  const [botId,setBotId] = useState(2);


  const handleGameOver = (payload) => {
    const state = [...gameState];

    let winner;
    if(!payload.hasOwnProperty('winner')) {
      winner = "tie";
    } else {

      winner = payload.winner == playerId ? "player" : "bot";

      const column = selectionHistory[selectionHistory.length - 1];
      const row = gameState[column].lastIndexOf("empty") + 1;

      const winnerClass = payload.winner == playerId ? "playerWinner" : "botWinner";

      const results = gameValidator(gameState,column,row,winner);

      results.forEach((result) => {
        if(result == null) { return };
        state[result[0]][result[1]] = winnerClass;
      });

    }

    setGameWinner(winner);
    setGameState(state);
    setWaiting(false);
    sparkDelight();
    setTimeout(() => {
      setGameIsOver(true);
    },2250)


  }

  const resetGame = () => {
    resetSvgs();
    setGameState(instantiateGameState());
    setDifficulty(undefined);
    setSelectionHistory([]);
    setGameIsOver(false);
  }

  function selectionMade(whichPlayer,column,row) {
    const state = [...gameState];
    state[column][row] = whichPlayer;

    const moveHistory = selectionHistory;

    moveHistory
      .push(column);

    setSelectionHistory(moveHistory);
    setGameState(state);

    if(whichPlayer == "player") {
      setWaiting(true);
      const requestUrl = urlConstructor(moveHistory,difficulty);

      fetch(requestUrl)
        .then((response) => {
          return response.json();
        })
        .then(payload => {
          if(payload.hasOwnProperty("bot_move") && payload.bot_move !== null) {
            const rowIndex = gameState[payload.bot_move].lastIndexOf("empty");
            selectionMade("bot",payload.bot_move,rowIndex);
          }

          if(payload.game_over) {
            handleGameOver(payload);
          }


        });
    } else {
      setWaiting(false);
    }


  }

  return (
    <div className="App">
      <Board
        gameState={gameState}
        selectionCallback={selectionMade}
      />

      <div className='headerBar'>
        <div className="logo">
          CONNECT FOUR
        </div>
        <ResetGameButton
          clickHandler={resetGame}
        />
      </div>

      <BotThinkingOverlay
        waiting={waiting}
      />

      <DifficultyOverlay
        visible={difficulty}
        click={setDifficulty}
      />

      <GameOverOverlay
        visible={gameIsOver}
        winner={gameWinner}
        reset={resetGame}
      />
    </div>
  );
}

export default App;
