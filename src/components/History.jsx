const History = ({ history, handleMove }) => {
  return (
    <div>
      <ul>
        {history.map((_, index) => (
          <li key={index} onClick={() => handleMove(index)}>
            {index === 0 ? "Go to Start" : `Move to #${index}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
