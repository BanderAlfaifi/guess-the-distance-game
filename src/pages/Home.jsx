import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Here is logo </div>
      <div>Here is the discreption </div>
      <button onClick={() => navigate("/explain")}>Explain the game</button>
      <button onClick={() => navigate("/adding-players")}>Start Playing</button>
    </>
  );
}

export default Home;
