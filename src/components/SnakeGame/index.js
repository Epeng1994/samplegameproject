import react,{useState} from 'react';

function Snake(props){
    
    const [grid, setGrid] = useState(new Array(25).fill(''))
    const [snake,setSnake] = useState([])
    const [food,setFood] = useState(0)

    const foodGeneration = ()=>{
        const index = Math.round(Math.random()*25)
        console.log(index)
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