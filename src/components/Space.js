import {useEffect,useRef} from 'react';
import * as d3 from 'd3';

import emptyToken from './Space/emptyToken.js';
import winningToken from './Space/winningToken.js';
import botToken from './Space/botToken.js';
import playerToken from './Space/playerToken.js';
import losingToken from './Space/losingToken.js';

function Space(props) {

  const groupReference = useRef();

  useEffect(() => {
    // When the piece is dropped
    const group = d3.select(groupReference.current);

    switch(props.tokenState) {
      case "empty":
        emptyToken(group);
        break;
      case "bot":
        botToken(group,props.row);
        break;
      case "player":
        playerToken(group,props.row);
        break;
      case "winner":
        winningToken(group);
        break;
      case "loser":
        losingToken(group);
        break;
    }
  },[props.tokenState]);



  return (
    <div className='boardSpace'
      style={{
        "backgroundColor":`${props.highlighted == true ? "#ccc" : "#eee"}`,
        "border":`${props.active == true ? "4px solid orange" : "4px solid white"}`
      }}
    >
    <div style={{"width":"100%","height":"100%"}}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{
          'height':'100%',
          'width':'100%',
          "overflow":"visible"
        }}
      >
        <g ref={groupReference}>
          <circle
            r="45"
            cx="50"
            cy="50"
            strokeWidth="2"
            stroke="black"
            fill="none"
          />
          <path />
        </g>
      </svg>

    </div>


    </div>
  );
}

export default Space;
