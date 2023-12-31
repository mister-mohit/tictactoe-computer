/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const StatusMessage = ({ winner, squares, isXNext }) => {
  const noMovesLeft = squares.every((squareVal) => squareVal !== null);
  console.log(isXNext);
  function renderStatusMessage() {
    if (winner) {
      return (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
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
          Next player is{" "}
          <span className={isXNext ? "text-green" : "text-orange"}>
            {isXNext ? "X" : "O"}
          </span>
        </>
      );
    }
  }
  return <h2>{renderStatusMessage()}</h2>;
};

export default StatusMessage;
