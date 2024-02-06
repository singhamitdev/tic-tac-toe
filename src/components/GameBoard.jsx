import React, { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   const [gameTurns, setGameTurns] = useState([]);
  //   const [activePlayer, setActivePlayer] = useState("X");

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setActivePlayer((currActivePlayer) =>
  //       currActivePlayer === "X" ? "O" : "X"
  //     );
  //     setGameTurns((prevTurns) => {
  //       let currPlayer = "X";
  //       if (prevTurns.length > 0 && prevTurns[0].player == "X") {
  //         currPlayer = "O";
  //       }
  //       const updatedTurns = [
  //         {
  //           square: { row: rowIndex, col: colIndex },
  //           player: currPlayer,
  //         },
  //         ...prevTurns,
  //       ];
  //       return updatedTurns;
  //     });
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArr) => [...innerArr]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
