import React, { useState } from "react";

const Player = ({ playerName, symbol, isActive, onChangePlayer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState(playerName);
  const handleEdit = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangePlayer(symbol, inputName);
    }
  };
  const handleChange = (event) => {
    setInputName(event.target.value);
  };
  let player = <span className="player-name">{inputName}</span>;

  if (isEditing) {
    player = (
      <input type="text" required value={inputName} onChange={handleChange} />
    );
  }
  return (
    <>
      <li className={isActive ? "active" : ""}>
        <span className="player">
          {player}
          <span className="player-symbol">{[symbol]}</span>
        </span>
        {isEditing}
        <button id="edit" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
};

export default Player;
