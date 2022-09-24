import React from 'react'
import Note from './Note'



const Notes = ({ notes, setNote, showAdd, modalFunc }) => {

 
    const notesList = notes.map(note => <Note 
        key={note.id} note={note} showAdd={showAdd} modalFunc={modalFunc} setNote={setNote} />)
    return (
        <div className="note">
            {notesList}
        </div>
    )
}

export default Notes
