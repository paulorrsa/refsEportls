import { useState, useRef } from "react";

export default function Player() {
  const newName = useRef();

  const [namePlayer, setNamePlayer] = useState(null);

  function handleClick() {
    setNamePlayer(newName.current.value);
    newName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {namePlayer ?? "unknown entity"}</h2>
      <p>
        <input ref={newName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
