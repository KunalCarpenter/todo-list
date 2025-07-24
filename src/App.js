import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/todo";
import Todolist from "./Components/list";

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const addList = (inputText) => {
        if (inputText !== '') setListTodo([...listTodo, inputText]);
    };

    const deleteListItem = (key) => {
        const newListTodo = [...listTodo];
        newListTodo.splice(key, 1);
        setListTodo(newListTodo);
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setEditValue(listTodo[index]);
    };

    const saveEdit = () => {
        if (editValue !== '') {
            const newList = [...listTodo];
            newList[editIndex] = editValue;
            setListTodo(newList);
            setEditIndex(null);
            setEditValue("");
        }
    };

    return (
        <div className="main">
            <div className="center">
                <div className="form-card">
                    <h1 className="app-heading">TODO-LIST</h1>
                    <hr />
                    <TodoInput addList={addList} />
                </div>

                {listTodo.map((listItem, i) => (
                    <Todolist
                        key={i}
                        index={i}
                        item={editIndex === i ? editValue : listItem}
                        isEditing={editIndex === i}
                        onChangeEdit={(e) => setEditValue(e.target.value)}
                        startEditing={() => startEdit(i)}
                        saveEdit={saveEdit}
                        deleteItem={deleteListItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
