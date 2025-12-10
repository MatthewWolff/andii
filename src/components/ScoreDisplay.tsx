interface ScoreDisplayProps {
    score: number
    total: number
}

function ScoreDisplay({ score, total }: ScoreDisplayProps) {
    return (
        <div className="score-display">
            Score: {score}/{total}
        </div>
    )
}

export default ScoreDisplay
