/* eslint-disable no-unused-vars */
const winnerCheck = function (squares) {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return { winner: squares[a], winnerList: list[i] };
    }
  }
  return ({ winner: null, winnerList: [] });
};

export default winnerCheck;
