import React from 'react'
import { useState } from 'react'

const AddNote = ({ onClick, onSave} ) => {
   
   const [ title, setTitle ] = useState('')
   const [ note, setNote ] = useState('')
   const [ created, setCreated ] = useState(new Date())
   const [ edited, setEdited ] = useState('')

  const onSubmit = (e) => {
    
    e.preventDefault()

    if(!title || !note) {
        alert("Fields can't be empty")
        return
    }

    onSave({ title, note, created, edited})
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
                     name="title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" row="5" 
                    placeholder="Note"
                    name="note"
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

export default AddNote
