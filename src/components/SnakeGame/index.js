import react,{useState, useEffect} from 'react';

const gridLayout = new Array(25).fill('')



function SnakeGame(props){
    const [grid,setGrid] = useState(gridLayout)
    const [food,setFood] = useState(Math.floor(Math.random()*25))
    const [snake,setSnake] = useState([0])


    useEffect(()=>{
        let cloneGrid = [...grid]
        cloneGrid[food] = 'F'
        for(let index of snake){
            cloneGrid[index] = 'S'
        }
        setGrid(cloneGrid)
    },[])


    const gridChange =()=>{
        
    }

    return(
        <div className ='centerContainer'>
            <h1>Snake</h1>
            <div className ='snake_board'>
                {
                    grid.map(a=>{
                        return(
                            <div className = 'snake_block'>{a}</div>
                        )
                    })
                }
                <button>up</button>
                <button>down</button>
                <button>left</button>
                <button>right</button>
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