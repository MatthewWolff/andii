interface ViewToggleButtonProps {
    showGrid: boolean
    onToggle: () => void
}

function ViewToggleButton({ showGrid, onToggle }: ViewToggleButtonProps) {
    return (
        <button className="view-toggle-btn" onClick={onToggle}>
            {showGrid ? 'View Slideshow' : 'View Images'}
        </button>
    )
}

export default ViewToggleButton
