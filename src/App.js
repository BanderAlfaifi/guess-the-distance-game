import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useReducer, useEffect, useState } from 'react';

import Home from './pages/Home'
import AddingPlayers from './pages/AddingPlayers'
import Question from './pages/Question'
import Result from './pages/Result'
import FinalResult from './pages/FinalResult'
import ErrorPage from './pages/ErrorPage';
import Explain from './pages/Explain';

export const playersContext = React.createContext();

//Here are the -name of actions- avalible realted to the data
export const Actions = {
  ADD_PLAYER: "Add_Player",
  DELETE_PLAYER: "Delete_Player",
};

// Here are the switching to the implemantation of each action
function reducer(state, action) {
  switch (action.type) {
    case Actions.ADD_PLAYER:
      return [...state, ...newPlayer(action.payload.names)];
    case Actions.DELETE_PLAYER:
      return state;
    default:
      throw new Error();
  }
}

const newPlayer = (names) => {
  console.log(names.length);
  let obj = [];
  for (let i = 0; i < names.length; i++) {
    obj[i] = {
      name: names[i],
      score: 0
    };
  }
  return obj;
};



function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [playersNames, setPlayersNames] = useState([]);

  return (
    <div className="App">
      <playersContext.Provider value={{state,dispatch}}>
      <Router> 
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/adding-players' element={<AddingPlayers />}/>
          <Route path='/question' element={<Question />}/>
          <Route path='/result' element={<Result />}/>
          <Route path='/final-result' element={<FinalResult />}/>
          <Route path='/explain' element={<Explain />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
      </playersContext.Provider>
    </div>
  );
}

export default App;
