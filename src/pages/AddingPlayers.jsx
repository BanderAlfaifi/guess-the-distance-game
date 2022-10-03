import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddingPlayers() {
  const navigate = useNavigate()
  return (
    <>
    <div>AddingPlayers</div>
    <button onClick={() => navigate("/question")}> Start </button>
    </>
  )
}

export default AddingPlayers