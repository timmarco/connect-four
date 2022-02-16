import Column from '../Column/Column.js';

function Board(props) {

  return(
    <div className='connectFourBoard'>
    {
      props.gameState
        .map((gameColumn,columnIndex) => {
          return <Column
          key={columnIndex}
          columnIndex={columnIndex}
          columnData={gameColumn}
          selectionCallback={props.selectionCallback}
        />
        })
    }
    </div>
  )
}

export default Board;
