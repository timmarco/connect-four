import * as d3 from 'd3';
import {useState} from 'react';

function GameOverOverlay(props) {

  const selection = d3.select("#gameOverlay");

  const transitionOut = () => {
    selection
      .transition()
      .duration(275)
      .ease(d3.easeQuadOut)
      .style("top","100%")
      .on("end",() => {
        selection.style("top","0%");
        props.reset()
      });
  }

  const transitionIn = () => {
    selection
      .style("top","100%")
      .transition()
      .duration(500)
      .ease(d3.easeQuadOut)
      .style("top","0%");
  }

  if(props.visible == true) {
    transitionIn();
  }

  return (
    <div
      id="gameOverlay"
      className='overlay'
      style={{
        "display":props.visible ? "block" : "none",
        "backgroundColor":"white",
        "top":"100%"
      }}>
      <div className='overlayBody'>
        <div className='overlayTitle'>
          Game Over
        </div>
        <div style={{
          "display":`${props.winner == "player" ? "block" : "none"}`
        }}>
          <h1>YOU WON!</h1>
          <img src='human-wins.gif'
            style={{
              "height":"200px"
            }} />
        </div>

        <div style={{
          "display":`${props.winner == "bot" ? "block" : "none"}`
        }}>
          <h1>YOU LOSE!</h1>
          <img src='robot-attack-saturday-night-live.gif'
            style={{
              "height":"200px"
            }} />
        </div>

        <div style={{
          "display":`${props.winner == "tie" ? "block" : "none"}`
        }}>
          <h1>IT WAS A TIE!</h1>
        </div>

        <div className='overlayOptionTitleButton' onClick={transitionOut}>
          PLAY AGAIN?
        </div>
      </div>
    </div>

  )
}

export default GameOverOverlay;
