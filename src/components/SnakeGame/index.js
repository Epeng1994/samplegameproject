import react,{useState} from 'react';





function Snake(props){

    const [grid, setGrid] = useState(new Array(16).fill(''))


    return(
        <div className = 'container'>
        {
            grid.map(a=>{
                return(
                    <div className = 'gridBlock'></div>
                )
            })
        }
        </div>
    )
}
export default Snake;