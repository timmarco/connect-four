import {useState} from 'react';

function Space(props) {

  let fill;
  let tokenLetter;
  let isWinningPiece = false;

  if(props.tokenState == "empty") { fill = "none" }
  if(props.tokenState == "player") {
    fill = "blue";
    tokenLetter="H";
  }

  if(props.tokenState == "bot") {
    fill = "red";
    tokenLetter = "B";
  }

  if(props.tokenState == "playerWinner") {
    fill = "blue";
    isWinningPiece = true;
    tokenLetter = "H";
  }

  if(props.tokenState == "botWinner") {
    fill = "red";
    isWinningPiece = true;
    tokenLetter = "B";
  }


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
        <g className={isWinningPiece == true ? "winningGroup" : "losingGroup"}>
          <circle
            r="45"
            cx="50"
            cy="50"
            strokeWidth="2"
            fill={ fill }
            className={isWinningPiece == true ? "winningPiece" : "losingPiece"}
          />
          <text
            x="50"
            y="50"
            fontFamily="Oswald"
            fontSize="3em"
            stroke="black"
            strokeWidth="6"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className={isWinningPiece == true ? "winningText" : "losingText"}
          >
            {tokenLetter}
          </text>

          <text
            x="50"
            y="50"
            fontFamily="Oswald"
            fontSize="3em"
            fill="white"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className={isWinningPiece == true ? "winningText" : "losingText"}
          >
            {tokenLetter}
          </text>
        </g>
      </svg>

    </div>


    </div>
  );
}

export default Space;
