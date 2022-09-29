import react, {useState, useEffect} from 'react';
import GridBlock from './GridBlock';

const PLAYER_ONE = 'PLAYER 1'
const PLAYER_TWO = 'PLAYER 2'

function TickTackToe(){
    const [grid, setGrid]= useState(['','','','','','','','',''])
    const [player,setPlayer] = useState(PLAYER_ONE)
    const [winner,setWinner] = useState('')

    const onGridChange = e =>{
        const currentPlayer =  player === 'PLAYER 1' ? 'X' : 'O'
        let cloneGrid = [...grid]
        if(cloneGrid[e.target.attributes.idx.value] === ''){
            cloneGrid[e.target.attributes.idx.value] = currentPlayer
            setPlayer(currentPlayer === 'X' ? PLAYER_TWO:PLAYER_ONE)
            setGrid(cloneGrid)
        }
        //win conditions 0-1-2 3-4-5 6-7-8 0-5-8 1-5-7 2-5-6
        if((cloneGrid[0]===cloneGrid[1]&&cloneGrid[1]===cloneGrid[2]&&cloneGrid[0]!==''&&cloneGrid[1]!==''&&cloneGrid[2]!=='')||
        (cloneGrid[3]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[5]&&cloneGrid[3]!==''&&cloneGrid[4]!==''&&cloneGrid[5]!=='')||
        (cloneGrid[6]===cloneGrid[7]&&cloneGrid[7]===cloneGrid[8]&&cloneGrid[6]!==''&&cloneGrid[7]!==''&&cloneGrid[8]!=='')||
        (cloneGrid[0]===cloneGrid[3]&&cloneGrid[3]===cloneGrid[6]&&cloneGrid[0]!==''&&cloneGrid[3]!==''&&cloneGrid[6]!=='')||
        (cloneGrid[1]===cloneGrid[4]&&cloneGrid[4]===cloneGrid[7]&&cloneGrid[1]!==''&&cloneGrid[4]!==''&&cloneGrid[7]!=='')||
        (cloneGrid[2]===cloneGrid[5]&&cloneGrid[5]===cloneGrid[8]&&cloneGrid[2]!==''&&cloneGrid[5]!==''&&cloneGrid[8]!=='')){
            setWinner(player)
        }
    }
    const resetGrid=e=>{
        setGrid(['','','','','','','','',''])
        setPlayer(PLAYER_ONE)
        setWinner('')
    }

    useEffect(()=>{

    },[grid])

    return(
        <>
        <div>
            <div>Current Player: {player}</div>
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