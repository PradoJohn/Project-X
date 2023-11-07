import React, { useState, useRef } from 'react';
import renderTable from './bryan_pages/components/Table.jsx';

function WhackaMole() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [points, setPoints] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const gameInterval = useRef(null);

  const startGame = () => {
    if (gameInterval.current) {
      clearInterval(gameInterval.current);
    }
    setGameStarted(!gameStarted)


    gameInterval.current = setInterval(() => {
      const randomBoxIndex = Math.floor(Math.random() * 9);
      setSelectedBox(randomBoxIndex);
    }, 300);
  

    setTimeout(() => {
      clearInterval(gameInterval.current);
      setGameStarted(false);
    }, 30000);
  };

  const handleBoxClick = () => {
    if (selectedBox !== null) {
      setPoints((prevPoints) => prevPoints + 1);
    }
  };

  

  return (
    <>
      <h1>WhackaMole</h1>
      {renderTable(gameStarted, selectedBox, handleBoxClick)}
      {gameStarted ? (
      <p>Points: {points}</p>
      ) : (
        <button onClick={startGame}>Start</button>
      )}
    </>
  );
}

export default WhackaMole;