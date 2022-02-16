import LoseComponent from './SubComponents/Lose.js';
import TieComponent from './SubComponents/Tie.js';
import WinComponent from './SubComponents/Win.js';

import transitionIn from './transitionIn.js';
import transitionOut from './transitionOut.js';

import {useRef,useEffect} from 'react';

function GameOverOverlay(props) {

  const divReference = useRef();

  useEffect(() => {
    transitionIn(divReference);
  },[]);

  return (
    <div
      id="gameOverlay"
      className='overlay'
      ref={divReference}
      style={{
        "backgroundColor":"white",
        "top":"100%"
      }}>
      <div className='overlayBody'>
        <div className='overlayTitle'>
          Game Over
        </div>

        {props.winner == 'player' && <WinComponent /> }
        {props.winner == 'bot' && <LoseComponent /> }
        {props.winner == 'tie' && <TieComponent /> }


        <div className='overlayOptionTitleButton'
          onClick={ () => {
            transitionOut(divReference,props.reset);
           }
          }
        >
          PLAY AGAIN?
        </div>
      </div>
    </div>

  )
}

export default GameOverOverlay;
