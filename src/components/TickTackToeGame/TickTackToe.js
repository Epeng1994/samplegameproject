import {useState, useEffect} from 'react';
import GridBlock from './GridBlock';
import WinnerBlock from './WinnerBlock';


const PLAYER_ONE = 'PLAYER 1'
const PLAYER_TWO = 'PLAYER 2'

function TickTackToe(){
    const [grid, setGrid]= useState(['','','','','','','','',''])
    const [player,setPlayer] = useState(PLAYER_ONE)
    const [winner,setWinner] = useState('')
    const [moves,setMoves] = useState(0)



    const onGridChange = e =>{
        const currentPlayer =  player === 'PLAYER 1' ? 'X' : 'O'
        let cloneGrid = [...grid]

        if(cloneGrid[e.target.attributes.idx.value] === ''){
            cloneGrid[e.target.attributes.idx.value] = currentPlayer
            setPlayer(currentPlayer === 'X' ? PLAYER_TWO:PLAYER_ONE)
            setGrid(cloneGrid)
        }
        setMoves(moves+1)

        if((cloneGrid[0]===cloneGrid[1]&&cloneGrid[1]===cloneGrid[2]&&cloneGrid[0]!==''&&cloneGrid[1]!==''&&cloneGrid[2]!=='')||
        (cloneGrid[3]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[5]&&cloneGrid[3]!==''&&cloneGrid[4]!==''&&cloneGrid[5]!=='')||
        (cloneGrid[6]===cloneGrid[7]&&cloneGrid[7]===cloneGrid[8]&&cloneGrid[6]!==''&&cloneGrid[7]!==''&&cloneGrid[8]!=='')||
        (cloneGrid[0]===cloneGrid[3]&&cloneGrid[3]===cloneGrid[6]&&cloneGrid[0]!==''&&cloneGrid[3]!==''&&cloneGrid[6]!=='')||
        (cloneGrid[1]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[7]&&cloneGrid[1]!==''&&cloneGrid[4]!==''&&cloneGrid[7]!=='')||
        (cloneGrid[2]===cloneGrid[5]&&cloneGrid[5]===cloneGrid[8]&&cloneGrid[2]!==''&&cloneGrid[5]!==''&&cloneGrid[8]!=='')||
        (cloneGrid[0]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[8]&&cloneGrid[0]!==''&&cloneGrid[4]!==''&&cloneGrid[8]!=='')||
        (cloneGrid[2]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[6]&&cloneGrid[2]!==''&&cloneGrid[4]!==''&&cloneGrid[6]!=='')){
            setWinner(`${player} wins!`)
        }
    }

    const resetGrid=e=>{
        setGrid(['','','','','','','','',''])
        setPlayer(PLAYER_ONE)
        setWinner('')
        setMoves(0)
    }

    useEffect(()=>{
        if(winner){
            document.getElementById('winner').play()
        }
        if(moves === 9){
            setWinner('It\'s a tie')
        }
    },[grid])

    return(
        <>
        <h1>Tic Tack Toe</h1>
        <audio id = 'winner'><source src = '/sounds/congratulations.mp3' type='audio/mpeg'/></audio>
        {winner &&<WinnerBlock winner={winner} reset={resetGrid}/>}
        <div>
            <div>Current Player: {player} {player === 'PLAYER 1' ? 'X' : 'O'}</div>
            {winner ? <div>{winner}</div> : null}
            <div className = 'container'>
            {
                grid.map((a,i)=>{
                    return(
                        <GridBlock idx = {i} onGridChange = {onGridChange} value = {a}/>
                    )
                })
            }
            </div>
            <button onClick = {()=>resetGrid()}>Reset</button>
        </div>
        </>
    )
};


export default TickTackToe;