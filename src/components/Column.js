import {useState} from 'react';

import Space from "./Space.js";

function Column(props) {

  const [borderColor,updateBorderColor] = useState("1px solid rgba(0,0,0,0)");
  const [isHighlighted,setIsHighlighted] = useState(false);
  const [activeSpace,setActiveSpace] = useState(-1);

  const checkIfMoveIsValid = () => {
    return props.columnData.filter((space) => { return space == "empty"}).length > 0;
  }

  const mouseover = () => {
    if(checkIfMoveIsValid() == false) { return }
    setActiveSpace(props.columnData.lastIndexOf("empty"));
    setIsHighlighted(true);
    updateBorderColor("4px solid red");
  }

  const mouseOut = () => {
    if(checkIfMoveIsValid() == false) { return }
    setIsHighlighted(false);
    setActiveSpace(-1);
    updateBorderColor("4px solid rgba(0,0,0,0)");
  }

  const click = (event) => {
    if(checkIfMoveIsValid() == false) { return }
    const rowIndex = props.columnData.lastIndexOf("empty")
    mouseOut();
    props
      .selectionCallback("player",props.columnIndex,rowIndex);
  }

  return (

    <div
      className='boardColumn'
      onMouseEnter={() => { mouseover() }}
      onMouseLeave={mouseOut}
      onClick = {click}
      style={{"border":"4px solid rgba(0,0,0,0)"}}
    >
    {
      props.columnData
        .map((space,index) => {
          return <Space
            key={index}
            tokenState={space}
            highlighted={isHighlighted}
            active={index == activeSpace}
            row={index}
          />
        })
    }
    </div>
  )
}

export default Column;
