import Board from "./Board";

const Choice = () => {
  const choicesquares = Array(9).fill(null);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Choose Mode</h2>
      <Board square={choicesquares} />
    </div>
  );
};

export default Choice;
