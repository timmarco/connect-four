import {useState,useEffect,createContext} from 'react';

import './styles/App.css';
import './styles/overlay.css';
import './styles/board.css';
import './styles/header.css';

import * as utils from './utils/utils.js';

import Board from './components/Board.js';
import ResetGameButton from './components/ResetGameButton.js';

import BotThinkingOverlay from './overlays/BotThinkingOverlay.js';
import DifficultyOverlay from './overlays/DifficultyOverlay.js';
import GameOverOverlay from './overlays/GameOverOverlay.js';
import StartGameOverlay from './overlays/StartGameOverlay.js';

function App() {

  const [acceptInput,setAcceptInput] = useState(true);
  const [difficulty,setDifficulty] = useState(undefined);
  const [gameIsOver,setGameIsOver] = useState(false);
  const [gameState,setGameState] = useState(utils.instantiateGameState());
  const [gameWinner,setGameWinner] = useState(undefined);
  const [selectionHistory,setSelectionHistory] = useState([]);
  const [waiting,setWaiting] = useState(false);

  const gameOver = (resultObject) => {
    const newState = utils.gameOverStateGenerator(resultObject.results,utils.deepClone(gameState));

    setTimeout(() => {
      utils.sounds.gameOver(resultObject.winner);
      setGameWinner(resultObject.winner);
      setGameState(newState);
      setWaiting(false);
    },1250);
    setTimeout(() => {
      setGameIsOver(true);
      setAcceptInput(true);
    },3000);
  }

  const handleBotSelection = () => {
    setAcceptInput(true);
    setWaiting(false);
    const check = utils.checkForWinner(utils.deepClone(gameState),selectionHistory,"bot");
    if(check.winner !== undefined) {
      setTimeout(() => {
        gameOver(check);
      },250)
    }
  }

  const handlePlayerSelection = () => {
    setAcceptInput(false);

    const check = utils.checkForWinner(utils.deepClone(gameState),selectionHistory,"player");

    if(check.winner === undefined) {
      setTimeout(() =>{
        requestBotResponseToPlayerSelection(selectionHistory);
      },1250)
    } else {
      gameOver(check);
    }
  }

  const requestBotResponseToPlayerSelection = (moveHistory) => {
    setWaiting(true);
    const requestUrl = utils.urlConstructor(moveHistory,difficulty);
    fetch(requestUrl)
      .then(response => response.json())
      .then(payload => {
        const rowIndex = gameState[payload.bot_move].lastIndexOf("empty");
        selectionMade("bot",payload.bot_move,rowIndex);
      });
  }

  const resetGame = () => {
    setGameState(utils.instantiateGameState());
    setDifficulty(undefined);
    setSelectionHistory([]);
    setGameIsOver(false);
  }

  const selectionMade = (whichPlayer,column,row) => {

    if(acceptInput == false) { return }

    gameState[column][row] = whichPlayer;
    selectionHistory.push(column);

    if(whichPlayer == "player") {
      handlePlayerSelection();
    } else {
      handleBotSelection();
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
