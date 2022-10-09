import react,{useState, useEffect} from 'react';
import './SnakeGame.css'
import Snake_Board_Grid from './Snake_Board_Grid';

const gridLayout = new Array(25).fill('')
const arrOfArr = [['','','','','',],['','','','','',],['','','','','',],['','','','','',],['','','','','',]]


function SnakeGame(props){
    const [grid,setGrid] = useState(arrOfArr)
    const [food,setFood] = useState(Math.floor(Math.random()*25))
    const [snake,setSnake] = useState([[0,0]])


    useEffect(()=>{
        // let cloneGrid = [...grid]
        // cloneGrid[food] = 'F'
        // for(let index of snake){
        //     cloneGrid[index] = 'S'
        // }
        // setGrid(cloneGrid)
        return()=>{

        }
    },[])


    const gridChange =position=>{
        switch(position){
            case 'left':
                return;
            case 'right':
                return;
            case 'up':
                return;
            case 'down':
                return;
        }
    }

    return(
        <div className ='centerContainer'>
            <h1>Snake</h1>
            <div className ='snake_board'>
                {
                    grid.map(row=>{
                        return(
                            <Snake_Board_Grid row={row}/>
                        )
                    })
                }
                <button onClick = {()=>gridChange('up')}>up</button>
                <button onClick = {()=>gridChange('down')}>down</button>
                <button onClick = {()=>gridChange('left')}>left</button>
                <button onClick = {()=>gridChange('right')}>right</button>
            </div>
        </div>
    )
}
export default SnakeGame;
/*
    state for grid
    state for snake
    stae for food
    grid = array
    snake = array of arrays? array of indices
    food = index

*/