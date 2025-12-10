import React from 'react'

function QuizComplete({ score, total }) {
    const getScoreMessage = () => {
        const percentage = (score / total) * 100
        if (percentage >= 90) return "Amazing! You're a Sanrio expert! 🌟"
        if (percentage >= 75) return "Great job! You know your Sanrio! 🎀"
        if (percentage >= 60) return "Not bad! Keep learning about Sanrio! 💕"
        if (percentage >= 40) return "Good try! Time to brush up on Sanrio! 📚"
        return "Keep studying! Sanrio has so much to discover! 🌸"
    }

    return (
        <div className="quiz-complete">
            <h1>Quiz Complete! 🎉</h1>
            <div className="final-score">
                <div className="score-number">{score}/{total}</div>
                <div className="score-message">{getScoreMessage()}</div>
            </div>
        </div>
    )
}

export default QuizComplete
