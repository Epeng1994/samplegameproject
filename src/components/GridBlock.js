import react from 'react';


function GridBlock(props){
    return(
        <div className = 'gridBlock' onClick = {props.onGridChange} value = {props.value} idx = {props.idx}>
            {props.value}
        </div>
    )
}


export default(GridBlock)