
function GridBlock(props){
    const iconPath = props.value === '' ? '' : props.value === 'X' ? 'X':'O'
    const pathString = `/assets/tic_tack_toe_assets/${iconPath}.png`
    
    return(
        <div className = 'gridBlock' onClick = {props.onGridChange} value = {props.value} idx = {props.idx}>
            {iconPath && <img className = 'XIcon' src = {pathString} />}
        </div>
    )
}


export default(GridBlock)