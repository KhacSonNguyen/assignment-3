import "./index.css"
import {useState} from "react";

function Task1(props) {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [text3, setText3] = useState();

    function show() {
        if (text1 && text2 && text3)
            alert(text1.toString() + text2.toString() + text3.toString());
    }
    return (
        <div>
            Text 1: <input type="number" value={text1} onChange={(e) => { setText1(e.target.value) }}/><br/>
            Text 2: <input type="text" value={text2} onChange={(e) => { setText2(e.target.value) }}/><br/>
            Text 3: <input type="text" value={text3} onChange={(e) => { setText3(e.target.value) }}/><br/>
            <button onClick={show}>Show</button>
        </div>
    );
}

export default Task1;