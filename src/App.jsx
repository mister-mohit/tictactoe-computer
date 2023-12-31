import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import winnerCheck from "./components/winner";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = winnerCheck(square);
  const nextPlayer = isXNext ? "X" : "O";
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

  const handleClick = (clickedPosition) => {
    if (square[clickedPosition] || winner ) {
      return;
    }

    setSquare((squareArr) => {
      return squareArr.map((squareVal, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "0";
        }

        return squareVal;
      });
    });

    setIsXNext((prevVAl) => !prevVAl);
  };
  
  return (
    <div className="app">
      <h1>{statusMessage}</h1>
      <Board square={square} handleClick={handleClick} />
    </div>
  );
}

export default App;
