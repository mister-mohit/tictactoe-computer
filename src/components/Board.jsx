/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Square from "./Square";

const Board = ({ square, handleClick, winnerList = [] }) => {
  const renderSquare = (position) => {
    const isWinningSquare = winnerList.includes(position);

    return (
      <Square
        value={square[position]}
        onClick={() => handleClick(position)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
