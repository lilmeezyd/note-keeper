import React from 'react'



const Modifier = ({onDelete, setNote, showAdd}) => {

 
    return (
        <div className="modifier" onClick={setNote}>
            <button className="btn btn-success" onClick={showAdd}>Edit</button>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Modifier
