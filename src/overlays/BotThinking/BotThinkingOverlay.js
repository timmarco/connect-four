import {useEffect,useRef} from 'react';
import transitionIn from './transitionIn.js';
import transitionOut from './transitionOut.js';

function BotThinkingOverlay(props) {

  const divReference = useRef();

  useEffect(() => {
    transitionIn(divReference);
    return () => {
      transitionOut(divReference)
    }
  },[]);

  return (
    <div
      id='botThinkingOverlay'
      ref={divReference}
      className='overlay'
      style={{
        'opacity':0,
        'display':'none',
        'backgroundColor':'rgba(0,0,0,0.25)'
      }}
    >
    <div style={{"position":"relative", "height":"100%"}}>
      <div style={{
        "position":"absolute",
        "bottom":"0"
        }}
      >
        <h1>BOT IS THINKING...</h1>
      </div>
      </div>
    </div>
  )
}

export default BotThinkingOverlay;
