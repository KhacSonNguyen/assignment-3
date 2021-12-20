import "./index.css"
import {useState} from "react";
import Task from "./Task";

function Todo() {
    const [text, setText] = useState('');
    const [incompleteTasks, setIncompleteTasks] = useState([
        {
            id: 1,
            text: 'Learn english',
            status: 0,
        },
        {
            id: 2,
            text: 'Play game',
            status: 0,
        },
        {
            id: 3,
            text: 'Check mail',
            status: 0,
        }
    ]);

    function onDeleteFromParent(id) {
        let newList = [...incompleteTasks];
        newList.splice(newList.findIndex(function(i){
            return i.id === id;
        }), 1);
        setIncompleteTasks(newList);
    }

    function onEdit(id, text) {
        let newList = [...incompleteTasks];
        newList = newList.map(obj =>
            obj.id === id ? { ...obj, text: text } : obj
        );
        setIncompleteTasks(newList);
    }

    let listIncompleteTasks = incompleteTasks.map((item, key) => {
        return <Task key={key} value={item} onDeleteFromParent={onDeleteFromParent} onEditFromParent={onEdit}/>
    })

    function addNewTask() {
        if (text.length === 0) return;
        let item = {
            id: Math.floor(Math.random() * 10000000 + 1),
            text: text,
            status: 0,
        }
        setIncompleteTasks([...incompleteTasks, item]);
        setText('');
    }

    function onChangeText(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <div className="container">
                <h2>TODO LIST</h2>
                <h3>Add Item</h3>
                <p>
                    <input id="new-task" type="text" value={text} onChange={onChangeText} style={{width: "95%"}}/>
                    <button onClick={addNewTask}>Add</button>
                </p>

                <h3>Todo</h3>
                <ul id="incomplete-tasks">
                    {listIncompleteTasks}
                </ul>

                <h3>Completed</h3>
                <ul id="completed-tasks">
                    <li>
                        <input type="checkbox" checked /><label>See the Doctor</label>
                        <input type="text" />
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Todo;