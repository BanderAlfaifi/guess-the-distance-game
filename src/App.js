import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import AddingPlayers from './pages/AddingPlayers'
import Question from './pages/Question'
import Result from './pages/Result'
import FinalResult from './pages/FinalResult'
import ErrorPage from './pages/ErrorPage';
import Explain from './pages/Explain';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
