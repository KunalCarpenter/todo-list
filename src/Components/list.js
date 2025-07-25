import React from "react";

function Todolist(props) {
    return (
        <li className="list">
            {props.isEditing ? (
                <>
                    <input
                        type="text"
                        value={props.item.text}
                        onChange={props.onChangeEdit}
                        className="edit-input"
                    />
                    <button 
                    className="save-button"
                    onClick={props.saveEdit}>Save</button>
                </>
            ) : (
                <>
                    <span
                        className={props.item.completed ? "completed" : ""}
                        onClick={() => !props.item.completed && props.completeItem(props.index)}
                    >
                        {props.item.text}
                    </span>
                    <span className="icon">
                        <i
                            className="fa-solid fa-pencil edit"
                            onClick={props.startEditing}
                        ></i>
                        <i
                            className="fa-solid fa-trash icon-delete"
                            onClick={() => props.deleteItem(props.index)}
                        ></i>
                    </span>
                </>
            )}
        </li>
    );
}

export default Todolist;
