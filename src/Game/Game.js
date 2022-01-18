import React, { useState } from 'react';
import './Game.css';

const TicTacToe = () => {
  const Cell = () => {
    return <div className='cell'></div>;
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <div className='boardgame'>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default TicTacToe;
