import React, { useState } from 'react'
import { getMatrixPosition, toLetter } from '../../utils/convert';
import resolveTour from '../../utils/resolveTour';

import { BoardBody, Square, Line, Knight, Move,
  Movements, Body, Columns, MovementsContainer, BtnPlay } from './styled'


function Board() {
  const makeBoard = Array(8).fill(Array(8).fill({visited: false, knight: false, content:''}))
  const [board, setBoard] = useState(makeBoard);
  const [initialPosition, setInitialPosition] = useState({line: 0, column: 0});
  const [movements, setMovements] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [reset, setReset] = useState(false);

  const setKnight = (square, content = '') => {
    const [line, column] = square.split('-').map(Number);
    
    const newBoard = board.map((row, l) => row
    .map((col, c) => {
      
      if (l == line && column == c) {
        return {
          content,
          visited: true,
          knight: true,
          };
      };
      return {
        ...col,
        knight: false,
      };
    }));

    setInitialPosition({line, column});
    setBoard(newBoard);
  }

  const play = ({line, column}) => {
    const initSquare = `${toLetter(column)}${line + 1}`;

    const squares = resolveTour(initSquare);
    const result = squares.map(getMatrixPosition);
    
    let count = 0;
    const allMoves = [];

    const  moveKnight = () => {
      allMoves.push({ moveNumber: count + 1, square: squares[count]});
      setMovements(allMoves);
      setKnight(result[count], count + 1);
      
      if(count === result.length -1) {
        clearInterval(myInterval);
        setReset(true);
      }
      else count += 1;
    };

    const myInterval = setInterval( moveKnight , 500);
  };

  const cleanBoard = () => {
    setReset(false);
    setBoard(makeBoard);
    setMovements([]);
    setInitialPosition({line: 0, column: 0});
    setPlaying(false);
  };

  return (
    <Body>
      <BoardBody >
        <Columns>
          {Array(8).fill('p').map((e, i) => <p key={e + i}> {toLetter(i)} </p>)}
        </Columns>
        {board.map((line, l) => (
          <Line key={`linha ${l}`}>
            <p>{l + 1}</p>
            {line.map(({knight, content}, c) => 
              !knight ? (
                <Square
                  key={`square ${l, c}`}
                  id={`${l}-${c}`}
                  onClick={ ({target: {id}}) => setKnight(id) }
                >
                  {content}
                </Square>
                ) : (
                  <Knight
                    key={`square ${l, c}`}
                    id={`${l}-${c}`}
                  />
                  ))}
          </Line>))}
          {!playing ? (
          <BtnPlay
            disabled={playing}
            onClick={ () => {
              setPlaying(true);
              play(initialPosition);
            } }
            >
            COMEÇAR
          </BtnPlay>
          ) : (
          <BtnPlay
            disabled={!reset}
            onClick={ cleanBoard }
          >
          Limpar tabuleiro
          </BtnPlay>
          )}
      </BoardBody>
      <MovementsContainer>
        <Movements>
          {movements.map(
            ({moveNumber, square}) => (
            <Move key={`${moveNumber}${square}`}>
              {`${moveNumber}° - ${square}`}
            </Move>))}
        </Movements>
      </MovementsContainer>
    </Body>
  )
}

export default Board;
