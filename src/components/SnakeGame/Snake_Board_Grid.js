

function Snake_Board_Grid(props){
    const {row} = props;


    return(
        <>
            <div>
                {
                    row.map(column=>{
                        return(
                            <div className = 'snake_block'>
                                {
                                    column
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Snake_Board_Grid;