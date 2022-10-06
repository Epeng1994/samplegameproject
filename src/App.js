import './App.css';
import {Route, Routes} from 'react-router-dom';
import TickTackToe from './components/TickTackToeGame/TickTackToe';
import Banner from './components/Banner/index';
import BackgroundMusic from './background.mp3'

function App() {
  const audio = new Audio(BackgroundMusic)
  audio.loop = true
  audio.play()


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
