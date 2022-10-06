import './App.css';
import {Route, Routes} from 'react-router-dom';
import TickTackToe from './components/TickTackToeGame/TickTackToe';
import Banner from './components/Banner/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Banner/>
      <Routes>
        <Route path='/tictacktoe' element = {<TickTackToe/>}/>
      </Routes>
    </div>
  );
}

export default App;
