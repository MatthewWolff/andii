import React from 'react'

function ScoreDisplay({ score, total }) {
    return (
        <div className="score-display">
            Score: {score}/{total}
        </div>
    )
}

export default ScoreDisplay
