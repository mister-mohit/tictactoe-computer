/* eslint-disable react/prop-types */
const Button = ({ handlePlayer }) => {
  return (
    <div className="btn-sec">
      <button className="choice-button" onClick={() => handlePlayer("human")}>
        2 Players
      </button>
      <button
        className="choice-button"
        onClick={() => handlePlayer("computer")}
      >
        Computer
      </button>
    </div>
  );
};

export default Button;
