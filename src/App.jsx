import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import winnerCheck from "./components/winner";
import StatusMessage from "./components/StatusMessage";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = winnerCheck(square);

  const handleClick = (clickedPosition) => {
    if (square[clickedPosition] || winner) {
      return;
    }

    setSquare((squareArr) => {
      return squareArr.map((squareVal, position) => {
        if (clickedPosition === position) {
          return isXNext ? "X" : "O";
        }

        return squareVal;
      });
    });

    setIsXNext((prevVAl) => !prevVAl);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={square} />
      <Board square={square} handleClick={handleClick} />
    </div>
  );
}

export default App;
