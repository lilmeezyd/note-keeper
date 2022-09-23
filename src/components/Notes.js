import React from 'react'
import Note from './Note'



const Notes = ({ notes, onDelete, setNote, showAdd }) => {

 
    const notesList = notes.map(note => <Note 
        key={note.id} note={note} showAdd={showAdd} setNote={setNote} onDelete={onDelete}  />)
    return (
        <div className="note">
            {notesList}
        </div>
    )
}

export default Notes
