

function TodoRowItem(props) {

    const deleteTodo = () => {
        props.deleteTodo(props.rowNumber)
    };

    return(
        <tr onClick={deleteTodo}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;