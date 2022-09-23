import React from 'react'
import Modifier from './Modifier'
import { useState } from 'react'

const Note = ({ note: { title, note, id, created, edited }, onDelete, setNote, showAdd }) => {


    const [ deleteOn, setDeleteOn ] = useState(false)
    const [ showModifier, setShowModifier ] = useState(false)

    const onMouseOver = () => setDeleteOn(!deleteOn)
    const onClick = () => setShowModifier(!showModifier)
    let newDate = new Date(created).toLocaleString()
    let editDate = edited !== '' ? new Date(edited).toLocaleString() : ''
    return (
        <div className="note-container-delete"  onClick={onClick} >
        <div className="note-container">
            <h4>{title}</h4>
            <p>{note}</p>
        </div>
        <div className="date">
            <div className="create-date">
                <h6>Created On</h6>
                <p>{newDate}</p>
            </div>
            {
                editDate === '' ? '' : 
                (<div className="edit-date">
                    <h6>Edited On</h6>
                    <p>{editDate}</p>
                </div>)}
        </div>
        {showModifier && <Modifier showAdd={showAdd} setNote={() => {setNote(id)}} onDelete={() => {onDelete(id)}}/>}
        </div>
    )
}

export default Note

/*

{ deleteOn && <button className="btn" onClick={() => {onDelete(id)}}>Delete</button>} 
*/