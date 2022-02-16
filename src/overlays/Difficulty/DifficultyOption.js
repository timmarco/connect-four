function DifficultyOption(props) {
  return (
    <div className='overlayOption difficultyOption' data-option={props.value} style={{"borderRight":"1px solid #aaa"}} onClick={props.click}>
      <div className='overlayOptionTitle'>{props.text}</div>
      <div className='overlayDescription'>{props.description}</div>
    </div>

  )
}

export default DifficultyOption;
