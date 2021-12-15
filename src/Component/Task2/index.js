import {useEffect, useState} from "react";

function Task2() {
    const [defaultText, setDefaultText] = useState('abc');
    useEffect(() => {
        setDefaultText('change text');
    }, [])
    return (
        <div>
            <input type="text" value={defaultText}/>
        </div>
    );
}

export default Task2;