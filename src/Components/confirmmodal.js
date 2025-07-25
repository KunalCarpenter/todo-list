import React from "react";
function ConfirmModal({ message, onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <button onClick={onConfirm}>Yes</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
}

export default ConfirmModal;
