import * as React from 'react';
import './GameField.scss'
import { GameCell } from '../GameCell/GameCell';
import { initialCells} from '../../source/cellsData';
import { useState } from 'react';
import { WinModal } from '../WinModal/WinModal';

export function GameField() {
  const [cells, setCells] = useState(initialCells);

  const checkGame = (cells) => {
    return cells.every((cell, index) => cell.order === index + 1);
  }

  const changeOrder = (cell) => {
    const emptyCell = cells.find(cell => !cell.isVisible);
    if (cell.index === 15) {
      return;
    }

    if (![1, 4].includes(Math.abs(cell.order - emptyCell.order))) {
      return
    }

    const tempOrder = emptyCell.order;
    emptyCell.order = cell.order;
    cell.order = tempOrder;

    const updatedCells = [...cells];

    setCells([])

    setTimeout(() => {
      setCells(updatedCells);
      checkGame(updatedCells)
    }, 0)
  }

  const isGameWon = checkGame(cells);


  return (
    <div className='game-field'>
      {cells.map(cell => (
        <GameCell key={cell.index} cell={cell} handleClick={changeOrder}></GameCell>
      ))}
      { isGameWon && (
        <WinModal />
      )}
    </div>
  );
}