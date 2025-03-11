import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import Player from './components/Player/Player';
import { useState } from 'react';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleGameBoard(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === 'X' ? 'O' : 'X'
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol
          id='players'
          className='highlight-player'>
          <Player
            initialName='Player 1'
            symbol='X'
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName='Player 2'
            symbol='O'
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onGameBoard={handleGameBoard}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
