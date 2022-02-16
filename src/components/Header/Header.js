import ResetGameButton from '../ResetGameButton/ResetGameButton.js';

function Header(props) {
  return (
   <div className='headerBar'>
        <div className="logo">
          CONNECT FOUR
        </div>
        <ResetGameButton
          clickHandler={props.reset}
        />
      </div>
    )
}

export default Header;
