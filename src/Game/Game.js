import React, { useState } from 'react';
import './Game.css';

const TicTacToe = () => {
  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));

  const handleClick = (num) => {
    let squares = [...cells];
    if (turn === 'X') {
      squares[num] = 'X';
      setTurn('O');
    } else {
      squares[num] = 'O';
      setTurn('X');
    }

    console.log(squares);
  };

  const Cell = ({ num }) => {
    return (
      <div onClick={() => handleClick(num)} className='cell'>
        -
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
