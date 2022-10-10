import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { playersContext, Actions } from "../App";
import "../styles/adding-players-style.css";

function AddingPlayers() {
  const players = useContext(playersContext);
  const [playersNames, setPlayersNames] = useState([]);
  const [playersNumber, setPlayersNumber] = useState([1, 2, 3]);
  const inputs = playersNumber.map((Player, index) => (
    <>
      <label>Player {index + 1}</label> <input type="text" id="name" />
    </>
  ));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayersNames(() => []);
    // To add every name in the form to playersName state
    let playersNumber = e.currentTarget.elements.length - 1;
    for (let i = 0; i < playersNumber; i++) {
      let value = e.currentTarget.elements[i].value;
      console.log("an element in the dom", value);
      setPlayersNames((oldNames) => [...oldNames, value.toString()]);
    }
    setTimeout(() => {
      navigate("/question");
    }, 1000);
  };

  useEffect(() => {
    players.dispatch({
      type: Actions.ADD_PLAYER,
      payload: { names: playersNames },
    });
  }, [playersNames]);

  const deleteInput = () => {
    let newArray = [];
    if (playersNumber.length > 2) {
      // no less than 2 players
      for (let i = 1; i < playersNumber.length; i++) {
        if (newArray.length < playersNumber.length) {
          newArray.push(i);
        }
      }
      setPlayersNumber([...newArray]);
    }
  };

  return (
    <>
      <div className="card" spellcheck="false" autocomplete="off">
        <div className="buttons">
          <button onClick={() => setPlayersNumber((old) => [...old, 3])}>
            More Players
          </button>
          <button onClick={() => deleteInput}>Less Players</button>
        </div>
        <form onSubmit={handleSubmit}>
          {inputs}
          {/* <button onClick={() => setPlayersNumber((old) => [...old,3])}>More Players</button> */}
          <input type="submit" value="Submit" id="submit"></input>
        </form>
      </div>
      {console.log(players.state)}
      {/* <div>AddingPlayers</div> */}
    </>
  );
}

export default AddingPlayers;
