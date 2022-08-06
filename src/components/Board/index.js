import { toLetter } from "../../utils/convert";
import useBoard from "./useBoard";

import {
  BoardBody,
  Square,
  Line,
  Knight,
  Move,
  Movements,
  Body,
  Columns,
  MovementsContainer,
  BtnPlay,
} from "./styled";

function Board() {
  const {
    board,
    playing,
    reset,
    cleanBoard,
    movements,
    setKnight,
    start,
  } = useBoard();

  return (
    <Body>
      <BoardBody>
        <Columns>
          {Array(8)
            .fill(" ")
            .map((e, i) => (
              <p key={e + i}> {toLetter(i)} </p>
            ))}
        </Columns>
        {board.map((line, l) => (
          <Line key={`linha ${l}`}>
            <p>{l + 1}</p>
            {line.map(({ knight, content }, c) =>
              !knight ? (
                <Square
                  key={`square ${(l, c)}`}
                  id={`${l}-${c}`}
                  onClick={
                    !playing ? ({ target: { id } }) => setKnight(id) : null
                  }
                >
                  {content}
                </Square>
              ) : (
                <Knight key={`square ${(l, c)}`} id={`${l}-${c}`} />
              )
            )}
          </Line>
        ))}
        {!playing ? (
          <BtnPlay disabled={playing} onClick={start}>
            COMEÇAR
          </BtnPlay>
        ) : (
          <BtnPlay disabled={!reset} onClick={cleanBoard}>
            Limpar tabuleiro
          </BtnPlay>
        )}
      </BoardBody>
      <MovementsContainer>
        <Movements>
          {movements.map(({ moveNumber, square }) => (
            <Move key={`${moveNumber}${square}`}>
              {`${moveNumber}° - ${square}`}
            </Move>
          ))}
        </Movements>
      </MovementsContainer>
    </Body>
  );
}

export default Board;
