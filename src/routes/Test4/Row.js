const Row = ({name, age, address})=>{
    // improvement plan add array indicating order of fields rendered, pass a single row obj instead of individual rows as args
    return(
        <tr>
            <td>
                {name}
            </td>
            <td>
                {age}
            </td>
            <td>
                {address}
            </td>
        </tr>
    )
}

export default Row