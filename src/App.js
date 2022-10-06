import './App.css';
import {useState,useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import TickTackToe from './components/TickTackToeGame/TickTackToe';
import Banner from './components/Banner/index';
import BackgroundMusic from './Ghostrifter-Official-City-Lights.mp3';


//use state to track which game component is currently active, change music based on input, stop music then play

function App() {
  const [playing,setPlaying] = useState(true)
  const audio = new Audio(BackgroundMusic)
  audio.loop = true

  useEffect(()=>{
    playing ? audio.play(): audio.pause()
    return ()=>{
      audio.pause()
    }
  },[playing])

  const toggle =()=> setPlaying(!playing);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <img onClick = {toggle} className = 'sound_icon' src = {playing ? './assets/sound_icon.jpg' : './assets/sound_icon_off.jpg'}/>
      <Banner/>
      <Routes>
        <Route path='/tictacktoe' element = {<TickTackToe/>}/>
      </Routes>
    </div>
  );
}

export default App;
