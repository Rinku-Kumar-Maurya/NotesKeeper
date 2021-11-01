import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import { v4 as uuidv4 } from "uuid";


function InputForm(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        key: "",
        id: "",
        title: "",
        content: ""
    })

    function expand() {
        setExpanded(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    function submitNote(event) {
        note.key = uuidv4();
        note.id = note.key;
        props.onAdd(note);
        setNote({
            key: "",
            id: "",
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}

                <textarea name="content"
                    placeholder="Take a note"
                    type="text" value={note.content}
                    value={note.content}
                    onChange={handleChange}
                    onClick={expand}
                    rows={isExpanded ? 3 : 1}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}


export default InputForm;