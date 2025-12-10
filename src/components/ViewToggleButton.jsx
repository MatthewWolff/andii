import React from 'react'

function ViewToggleButton({ showGrid, onToggle }) {
    return (
        <button className="view-toggle-btn" onClick={onToggle}>
            {showGrid ? 'View Slideshow' : 'View Images'}
        </button>
    )
}

export default ViewToggleButton
