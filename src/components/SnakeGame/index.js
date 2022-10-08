import react,{useState} from 'react';


const gridLayout = new Array(25).fill('')


function Snake(props){
    
    const [grid, setGrid] = useState(gridLayout)
    const [snake,setSnake] = useState([])
    const [food,setFood] = useState(0)

    const foodGeneration = ()=>{
        const index = Math.floor(Math.random()*25)
        let cloneGrid = [...gridLayout]
        cloneGrid[index] = 'X'
        setGrid(cloneGrid)
    }


    return(
        <div className ='centerContainer'>
            <h1>Snake</h1>
            <div className = 'snake_board'>
                {
                    grid.map(a=>{
                        return(
                            <div className = 'snake_block'>{a}</div>
                        )
                    })
                }
            </div>
            <button onClick = {foodGeneration}>Randomize food</button>
        </div>
    )
}
export default Snake;
/*
    state for grid
    state for snake
    stae for food
    grid = array
    snake = array of arrays? array of indices
    food = index

*/