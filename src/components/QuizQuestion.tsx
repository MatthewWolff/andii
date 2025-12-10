import React from 'react'

interface QuizQuestionProps {
    questionNumber: number
    totalQuestions: number
    question: string
    answers: string[]
    selectedAnswer: string | null
    correctAnswer: string
    showResult: boolean
    onAnswerClick: (answer: string) => void
}

function QuizQuestion({
    questionNumber,
    totalQuestions,
    question,
    answers,
    selectedAnswer,
    correctAnswer,
    showResult,
    onAnswerClick,
}: QuizQuestionProps) {
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
