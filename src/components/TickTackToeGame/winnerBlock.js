import {useNavigate} from 'react-router-dom'


function WinnerBlock(props){
    const navigate = useNavigate()
    const returnToHome = () =>{
        navigate('/')
    }
    return(
        <div className = 'winnerBlock'>
            <div className = 'container'>
                <p>{props.winner}</p>
                <div>
                    <button onClick = {props.reset}>Play again?</button>
                    <button onClick = {returnToHome}>Return to home</button>
                </div>
            </div>
        </div>
    )
}

export default WinnerBlock;