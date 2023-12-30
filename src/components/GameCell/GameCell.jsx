import * as React from 'react';
import classNames from 'class-names';
import './GameCell.scss'

export function GameCell({cell, handleClick}) {
  const {isVisible, order, context} = cell;
  return (
    <div
      className={classNames('game-cell', { 'game-cell--transparent': !isVisible})}
      style={{'order': order}}
      onClick={() => handleClick(cell)}
    >
      {context}
    </div>
  );
}