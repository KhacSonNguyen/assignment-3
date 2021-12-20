import {useState} from "react";

function Task(props) {
    const [innerText, setInnerText] = useState(props.value.text);
    const [isEditMode, setIsEditMode] = useState(false);

    function onDelete(id) {
        props.onDeleteFromParent(id);
    }

    function onEdit() {
        setIsEditMode(true);
    }

    function onTextChange(e) {
        setInnerText(e.target.value);
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter'){
            props.onEditFromParent(props.value.id, innerText);
            setIsEditMode(false);
        }
    }

    return (
        <li className={isEditMode ? "editMode" : ""}>
            <input type="checkbox" />
            <label>{props.value.text}</label><input type="text" value={innerText} onChange={onTextChange} onKeyPress={handleKeyPress}/>
            <button className="edit" onClick={onEdit}>Edit</button>
            <button className="delete" onClick={() => {onDelete(props.value.id)}}>Delete</button>
        </li>
    );
}

export default Task;