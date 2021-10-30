import { useState } from "react";

function InputForm () {

    const [title, setTitle] = useState("");
    const [noteValue, setNoteValue] = useState("");

    function handleTitle (event) {
        setTitle(event.target.value);
    }

    function handleNoteInput (event) {
        setNoteValue(event.target.value);
    }

    return (
        <div>
            <form>
                <input  placeholder="Title" type="text" value={title} onChange={handleTitle}></input>
                <input placeholder="Take a note" type="text" value={noteValue} onChange={handleNoteInput}></input>
                <button>Add</button>
            </form>
        </div>
    )
}


export default InputForm;