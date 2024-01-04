/* eslint-disable no-unused-vars */
import "./styles.scss";
import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import winnerCheck from "./components/winner";
import StatusMessage from "./components/StatusMessage";
import Choice from "./components/Choice";
import Button from "./components/Button";
const NEW_GAME = [{ squares: Array(9).fill(null), isXCurrent: false }];

function App() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      isXCurrent: false,
    },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [isComputer, setIsComputer] = useState(false);
  const [isGameStart, setIsGameStart] = useState(false);
  const currentGameState = history[currentMove];
  const { winner, winnerList } = winnerCheck(currentGameState.squares);
  console.log(winner);
  console.log(winnerList);

  const handleMove = (move) => {
    setCurrentMove(move);
  };

  const handlePlayer = (player) => {
    if (player === "computer") {
      setIsComputerTurn((prevCompVal) => !prevCompVal);
      setIsComputer((prevCompVal) => !prevCompVal);
    }
    setIsGameStart((prevStartVal) => !prevStartVal);
  };

  const handleClick = (clickedPosition) => {
    if (currentGameState.squares[clickedPosition] || winner) {
      return;
    }

    const isTraversing = currentMove + 1 !== history.length ? true : false;

    setHistory((currentHistory) => {
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[currentHistory.length - 1];
      const nextGamingState = lastGamingState.squares.map(
        (squareVal, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXCurrent ? "X" : "O";
          }
          return squareVal;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentMove + 1)
        : currentHistory;

      return base.concat({
        squares: nextGamingState,
        isXCurrent: !lastGamingState.isXCurrent,
      });
    });

    setCurrentMove((move) => move + 1);

    if (isComputer) {
      setIsComputerTurn((prevCompTurnVal) => !prevCompTurnVal);
    }
  };

  if (isComputerTurn) {
    const indexesLeft = [];
    for (var i = 0; i < currentGameState.squares.length; i++) {
      if (!currentGameState.squares[i]) {
        indexesLeft.push(i);
      }
    }
    const minIndex = 0;
    const maxIndex = indexesLeft.length;
    const randomNumber = Math.floor(
      Math.random() * (maxIndex - minIndex) + minIndex
    );

    handleClick(indexesLeft[randomNumber]);
  }

  function resetGame() {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  function changeMode() {
    setHistory(NEW_GAME);
    setCurrentMove(0);
    setIsComputer(false);
    setIsComputerTurn(false);
    setIsGameStart(false);
  }

  return (
    <div className="app">
      <h1>
        <span className="text-orange">Tic</span> Tac{" "}
        <span className="text-green">Toe</span>
      </h1>
      {isGameStart ? (
        <>
          <StatusMessage
            winner={winner}
            currentGameState={history[currentMove]}
          />

          <Board
            square={currentGameState.squares}
            handleClick={handleClick}
            winnerList={winnerList}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              type="button"
              className={`btn-reset ${currentMove > 0 ? "active" : ""}`}
              onClick={resetGame}
            >
              Start New Game
            </button>
            <button
              type="button"
              className={`btn-reset ${currentMove > 0 ? "active" : ""}`}
              onClick={changeMode}
            >
              Select New Mode
            </button>
          </div>
          <History history={history} handleMove={handleMove} />
        </>
      ) : (
        <>
          <Choice />
          <Button handlePlayer={handlePlayer} />
        </>
      )}
    </div>
  );
}

export default App;
