import React from 'react'

const Footer = ( { onClick, disable }) => {
    return (
        <div className="footer">
            <button className="add-note btn-success" onClick={onClick} disabled={disable} >
                <h3>+</h3>
            </button>
        </div>
    )
}

export default Footer
