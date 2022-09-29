import react, {useState, useEffect} from 'react';
import GridBlock from './GridBlock';

const PLAYER_ONE = 'PLAYER 1'
const PLAYER_TWO = 'PLAYER 2'

function TickTackToe(){
    const [grid, setGrid]= useState(['1','2','3','4','5','6','7','8','9'])
    const [player,setPlayer] = useState(PLAYER_ONE)

    const onGridChange = e =>{
        //console.log(e.target.attributes.idx.value)
        const currentPlayer =  player === 'PLAYER 1' ? 'X' : 'O'
        let cloneGrid = [...grid]
        cloneGrid[e.target.attributes.idx.value] = currentPlayer
        setPlayer(currentPlayer === 'X' ? PLAYER_TWO:PLAYER_ONE)
        setGrid(cloneGrid)
        //console.log(currentPlayer)
    }

    useEffect(()=>{

    },[grid])

    return(
        <>
        <div>
            <div>Current Player: {player}</div>
            <div className = 'container'>
            {
                grid.map((a,i)=>{
                    return(
                        <GridBlock idx = {i} onGridChange = {onGridChange} value = {a}/>
                    )
                })
            }
            </div>

        </div>

        </>
    )
};


export default TickTackToe;