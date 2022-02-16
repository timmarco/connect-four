function ResetGameButton(props) {
  return (
    <div className='resetButton' onClick={props.clickHandler}>
      Reset Game
    </div>
  )
}

export default ResetGameButton;
