import {useState} from 'react';

function StartGameOverlay(props) {
  return (
    <div className='overlay'
      style={{
        "backgroundColor":"magenta",
        "display":props.visible ? "block" : "none"
      }}>
    >
      <h1>Connect Four</h1>
      <h3>[Pick Difficulty Level]</h3>
      <h3>[Pick who goes first]</h3>
    </div>
  )
}

export default StartGameOverlay;
