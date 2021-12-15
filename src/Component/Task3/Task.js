function Task(props) {
    function onDelete(id) {
        props.onDeleteFromParent(id);
    }
    return (
        <li>
            <input type="checkbox" />
            <label>{props.value.text}</label><input type="text" value={props.value.text} />
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => {onDelete(props.value.id)}}>Delete</button>
        </li>
    );
}

export default Task;