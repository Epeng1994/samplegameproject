import './App.css';
import {Route, Routes} from 'react-router-dom';
import TickTackToe from './components/TickTackToeGame/TickTackToe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path='/' element = {<TickTackToe/>}/>
      </Routes>
    </div>
  );
}

export default App;
