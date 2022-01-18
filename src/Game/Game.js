import React, { useState } from 'react';
import './Game.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  const winnerCheck = (squares) => {
    let possibleWins = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };


  const handleClick = (num) => {
    if (cells[num] !== '') {
      return;
    }

    let squares = [...cells];
    if (turn === 'X') {
      squares[num] = 'X';
      setTurn('O');
    } else {
      squares[num] = 'O';
      setTurn('X');
    }

    winnerCheck(squares);
    setCells(squares);
  };

  const Cell = ({ num }) => {
    return (
      <div onClick={() => handleClick(num)} className='cell'>
        {cells[num]}
      </div>
    );
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h3>Turn: {turn}</h3>
      <div className='boardgame'>
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </div>
    </div>
  );
};

export default TicTacToe;
