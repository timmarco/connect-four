import {useEffect,useRef} from 'react';
import handleTokenState from './handleTokenState.js';

function Space(props) {

  const groupReference = useRef();

  useEffect(() => {
    handleTokenState(groupReference,props);
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
