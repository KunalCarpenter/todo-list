import React, { useState } from "react";
import "./App.css";
import TodoInput from "./Components/todo";
import Todolist from "./Components/list";
import ConfirmModal from "./Components/confirmmodal";

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState(null);
    const [modalIndex, setModalIndex] = useState(null);

    const addList = (inputText) => {
        if (inputText !== '') {
            const newItem = { text: inputText, completed: false };
            setListTodo([...listTodo, newItem]);
        }
    };

    const deleteListItem = (index) => {
        setModalIndex(index);
        setModalAction('delete');
        setShowModal(true);
    };

    const confirmDelete = () => {
        const newList = [...listTodo];
        newList.splice(modalIndex, 1);
        setListTodo(newList);
        setShowModal(false);
    };

    const markCompleted = (index) => {
        setModalIndex(index);
        setModalAction('complete');
        setShowModal(true);
    };

    const confirmComplete = () => {
        const updated = [...listTodo];
        updated[modalIndex].completed = true;
        setListTodo(updated);
        setShowModal(false);
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setEditValue(listTodo[index].text);
    };

    const saveEdit = () => {
        if (editValue !== '') {
            const newList = [...listTodo];
            newList[editIndex].text = editValue;
            setListTodo(newList);
            setEditIndex(null);
            setEditValue("");
        }
    };

    const handleConfirm = () => {
        if (modalAction === 'delete') confirmDelete();
        else if (modalAction === 'complete') confirmComplete();
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
                        item={editIndex === i ? { text: editValue } : listItem}
                        isEditing={editIndex === i}
                        onChangeEdit={(e) => setEditValue(e.target.value)}
                        startEditing={() => startEdit(i)}
                        saveEdit={saveEdit}
                        deleteItem={deleteListItem}
                        completeItem={markCompleted}
                    />
                ))}

                {showModal && (
                    <ConfirmModal
                        message={modalAction === 'delete' ? "Delete this task?" : "Mark as completed?"}
                        onConfirm={handleConfirm}
                        onCancel={() => setShowModal(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
