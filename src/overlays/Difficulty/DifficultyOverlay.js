import {useEffect,useRef} from 'react';
import DifficultyOption from './DifficultyOption.js';
import transitionIn from './transitionIn.js';
import transitionOut from './transitionOut.js';
import handleClick from './handleClick.js';

function DifficultyOverlay(props) {

  const divReference = useRef();

  useEffect(() => {
    transitionIn(divReference);
  },[])

  return(
    <div
    className='overlay'
    ref={divReference}
    id='difficultyOverlay'
    style={{
      "backgroundColor":"white",
      "color":"black"
    }}>
      <div className='overlayBody'>
      <div className='overlayTitle'>
        SELECT DIFFICULTY
      </div>

      <div className='overlayOptions'>
        <DifficultyOption
          value='easy'
          text='Easy'
          description="Like playing against a toddler... but without the temper tantrums"
          click={() => { handleClick(divReference,"easy",props.click) }}
        />

        <DifficultyOption
          value='medium'
          text='Medium'
          description="Like playing against an adult... but with fewer temper tantrums"
          click={() => { handleClick(divReference,"medium",props.click) }}
        />

        <DifficultyOption
          value='hard'
          text='Hard'
          description="This bot's got brains"
          click={() => { handleClick(divReference,"hard",props.click) }}
        />
      </div>

      </div>
    </div>

  )
}

export default DifficultyOverlay;
