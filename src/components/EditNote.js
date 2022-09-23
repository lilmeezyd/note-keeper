import React from 'react'
import { useState } from 'react'

const EditNote = ({ editNote,onClick, onEdit} ) => {
   
   const [ title, setTitle ] = useState(editNote[0].title)
   const [ note, setNote ] = useState(editNote[0].note)
   const [ created, setCreated ] = useState(editNote[0].created)
   const [ edited, setEdited ] = useState(new Date())
   const id = editNote[0].id

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title || !note) {
        alert("Fields can't be empty")
        return
    }

    onEdit({id, title, note, created, edited})
    onClick()

    setTitle('')
    setNote('')

   }
   

    return (
        <div className="add-container">
            <div className="add-note-nav">
                <h4 onClick={onClick} className="btn-back"
                    >Back</h4>
            </div>
            <form className="input"  onSubmit={onSubmit}>
                <input type="text"
                     placeholder="Title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" row="5" 
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}></textarea>
                    <button type="submit" className="btn btn-success">Add Note</button>
            </form>
            <div className="add-note-footer">
                <div className="menu-disc">
                    <div className="menu-btn_disc"></div>
                </div>
            </div>
        </div>
    )
}

export default EditNote
