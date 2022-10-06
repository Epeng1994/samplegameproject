//Name/Home     Game1, Game2, Game3, Contact? 
import {Link,useNavigate} from 'react-router-dom'



function Banner(props){
    const navigate = useNavigate()
    const homeOnClick=()=>{
        navigate('/')
    }
    return(
        <div className = 'banner'>
            <div className = 'centerContainer' onClick = {homeOnClick}><h1>Retro Corner</h1></div>
            <div className ='gameSelectContainer'>
                <div className = 'gameSelect'><Link to = '/tictacktoe'>tictacktoe</Link></div>
                <div className = 'gameSelect'><Link to = '/snake'>Snake</Link></div>
                <div className = 'gameSelect'><Link to = '/pong'>Pong</Link></div>
            </div>

        </div>
    );
};

export default Banner;