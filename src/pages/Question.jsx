import React, { useContext } from "react";
import { playersContext } from "../App";
import "../styles/adding-players-style.css";

function Question() {
  const players = useContext(playersContext);
  

  return (
    <>
    <form >
      {/* START OF MAP */}
      {players.state.map((player) => {
        return (
            <>
            <label>{player.name} answer</label> <input type="number" id="name" />
            </>
        );
      })}
      {/* END OF MAP */}
    </form>
    </>
  );
}

export default Question;
