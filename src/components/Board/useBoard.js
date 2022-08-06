import { useCallback, useState } from "react";
import { getMatrixPosition, toLetter } from "../../utils/convert";
import resolveTour from "../../utils/resolveTour";

function useBoard() {
  const makeBoard = Array(8).fill(
    Array(8).fill({ visited: false, knight: false, content: "" })
  );
  const [board, setBoard] = useState(makeBoard);
  const [initialPosition, setInitialPosition] = useState({
    line: 0,
    column: 0,
  });
  const [movements, setMovements] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [reset, setReset] = useState(false);

  const setKnight = useCallback((square, content = "") => {
    const [line, column] = square.split("-").map(Number);

    setInitialPosition({ line, column });

    setBoard((prev) => {
      return prev.map((row, l) =>
        row.map((col, c) => {
          if (l == line && column == c) {
            return {
              content,
              visited: true,
              knight: true,
            };
          }
          return {
            ...col,
            knight: false,
          };
        })
      );
    });
  }, []);

  const play = ({ line, column }) => {
    const initSquare = `${toLetter(column)}${line + 1}`;

    const squares = resolveTour(initSquare);
    const result = squares.map(getMatrixPosition);

    let count = 0;
    const allMoves = [];

    const moveKnight = () => {
      allMoves.push({ moveNumber: count + 1, square: squares[count] });
      setMovements(allMoves);
      setKnight(result[count], count + 1);

      if (count === result.length - 1) {
        clearInterval(myInterval);
        setReset(true);
      } else count += 1;
    };

    const myInterval = setInterval(moveKnight, 500);
  };

  const cleanBoard = () => {
    setReset(false);
    setBoard(makeBoard);
    setMovements([]);
    setInitialPosition({ line: 0, column: 0 });
    setPlaying(false);
  };

  const start = () => {
    setPlaying(true);
    play(initialPosition);
  };

  return {
    board,
    playing,
    initialPosition,
    movements,
    reset,
    play,
    cleanBoard,
    setKnight,
    setPlaying,
    start,
  };
}

export default useBoard;
