/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const StatusMessage = ({ winner, currentGameState }) => {
  const {squares, isXCurrent} = currentGameState;
  const noMovesLeft = squares.every((squareVal) => squareVal !== null);
  function renderStatusMessage() {
    if (winner) {
      return (
        <div className='winning'>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </div>
      );
    } else if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> tied
        </>
      );
    } else {
      return (
        <>
          Current player is{" "}
          <span className={isXCurrent ? "text-green" : "text-orange"}>
            {isXCurrent ? "X" : "O"}
          </span>
        </>
      );
    }
  }
  return <h2>{renderStatusMessage()}</h2>;
 };

export default StatusMessage;
