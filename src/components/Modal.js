import React from 'react'

const Modal = ({ onDelete, modalFunc, onClick, deleteNote }) => {
    const id = deleteNote[0].id
    const removeNote = () => {
        console.log(id)
        onDelete(id)
        onClick()

    }
    return (
        <div className="modalOver">
        <div className="modal">
            <h4>Are You Sure</h4>
            <div className="buttons">
                <button className="btn btn-success" onClick={onClick}>Cancel</button>
                <button className="btn btn-danger" onClick={removeNote}>Yes</button>
            </div>
      </div>
      </div>
    )
}

export default Modal
