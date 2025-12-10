import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import './SanrioQuiz.css'

function SanrioQuiz() {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [quizComplete, setQuizComplete] = useState(false)

    useEffect(() => {
        document.title = 'Sanrio Quiz 🎀'
        loadQuestions()
        return () => {
            document.title = "Andii's Site"
        }
    }, [])

    const loadQuestions = async () => {
        try {
            const response = await fetch('/andii/sanrio-quiz/hello_kitty_trivia.json')
            const allQuestions = await response.json()
            
            // Select questions by difficulty
            const easy = allQuestions.filter(q => q.difficulty === 'easy').slice(0, 6)
            const medium = allQuestions.filter(q => q.difficulty === 'medium').slice(0, 8)
            const hard = allQuestions.filter(q => q.difficulty === 'hard').slice(0, 6)
            
            // Shuffle and combine
            const selectedQuestions = [...easy, ...medium, ...hard]
                .sort(() => Math.random() - 0.5)
            
            setQuestions(selectedQuestions)
        } catch (error) {
            console.error('Failed to load questions:', error)
        }
    }

    const handleAnswerClick = (answer) => {
        if (selectedAnswer) return
        
        setSelectedAnswer(answer)
        setShowResult(true)
        
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1)
        }
        
        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1)
                setSelectedAnswer(null)
                setShowResult(false)
            } else {
                setQuizComplete(true)
            }
        }, 1500)
    }

    const getScoreMessage = () => {
        const percentage = (score / 20) * 100
        if (percentage >= 90) return "Amazing! You're a Sanrio expert! 🌟"
        if (percentage >= 75) return "Great job! You know your Sanrio! 🎀"
        if (percentage >= 60) return "Not bad! Keep learning about Sanrio! 💕"
        if (percentage >= 40) return "Good try! Time to brush up on Sanrio! 📚"
        return "Keep studying! Sanrio has so much to discover! 🌸"
    }

    if (questions.length === 0) {
        return (
            <div className="quiz-container">
                <BackButton />
                <div className="loading">Loading quiz... 🎀</div>
            </div>
        )
    }

    if (quizComplete) {
        return (
            <div className="quiz-container">
                <BackButton />
                <div className="quiz-complete">
                    <h1>Quiz Complete! 🎉</h1>
                    <div className="final-score">
                        <div className="score-number">{score}/20</div>
                        <div className="score-message">{getScoreMessage()}</div>
                    </div>
                </div>
            </div>
        )
    }

    const currentQ = questions[currentQuestion]
    const allAnswers = [currentQ.answer, ...currentQ.incorrect_answers].sort(() => Math.random() - 0.5)

    return (
        <div className="quiz-container">
            <BackButton />
            <div className="score-display">Score: {score}/20</div>
            
            <div className="question-container">
                <div className="question-number">Question {currentQuestion + 1}/20</div>
                <h2 className="question">{currentQ.question}</h2>
                
                <div className="answers-grid">
                    {allAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className={`answer-button ${
                                showResult
                                    ? answer === currentQ.answer
                                        ? 'correct'
                                        : selectedAnswer === answer
                                        ? 'incorrect'
                                        : 'neutral'
                                    : ''
                            }`}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SanrioQuiz
