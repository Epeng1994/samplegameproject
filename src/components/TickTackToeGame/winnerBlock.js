function WinnerBlock(props){
    return(
        <div className = 'winnerBlock'>
            <div className = 'container'>
                <p>{props.winner}</p>
                <div>
                    <button onClick = {props.reset}>Play again?</button>
                    <button>Return to home</button>
                </div>
            </div>
        </div>
    )
}

export default WinnerBlock;