import React from 'react'

function QuizQuestion({
    questionNumber,
    totalQuestions,
    question,
    answers,
    selectedAnswer,
    correctAnswer,
    showResult,
    onAnswerClick,
}) {
    return (
        <div className="question-container">
            <div className="question-number">
                Question {questionNumber}/{totalQuestions}
            </div>
            <h2 className="question">{question}</h2>

            <div className="answers-grid">
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`answer-button ${
                            showResult
                                ? answer === correctAnswer
                                    ? 'correct'
                                    : selectedAnswer === answer
                                      ? 'incorrect'
                                      : 'neutral'
                                : ''
                        }`}
                        onClick={() => onAnswerClick(answer)}
                        disabled={selectedAnswer !== null}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuizQuestion
