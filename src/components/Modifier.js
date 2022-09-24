import React from 'react'



const Modifier = ({onDelete, setNote, showAdd, modalFunc}) => { 

 
    return (
        <>
        <div className="modifier" onClick={setNote}>
            <button className="btn btn-success" onClick={showAdd}>Edit</button>
            <button className="btn btn-danger" onClick={modalFunc}>Delete</button>
        </div>
        </>
    )
}

export default Modifier
