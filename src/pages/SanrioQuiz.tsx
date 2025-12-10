import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import ScoreDisplay from '../components/ScoreDisplay'
import QuizQuestion from '../components/QuizQuestion'
import QuizComplete from '../components/QuizComplete'
import { Question } from '../types/quiz'
import './SanrioQuiz.css'

function SanrioQuiz() {
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [score, setScore] = useState<number>(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [showResult, setShowResult] = useState<boolean>(false)
    const [quizComplete, setQuizComplete] = useState<boolean>(false)
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([])

    useEffect(() => {
        document.title = 'Sanrio Quiz 🎀'
        loadQuestions()
        return () => {
            document.title = "Andii's Site"
        }
    }, [])

    useEffect(() => {
        if (questions.length > 0) {
            const currentQ = questions[currentQuestion]
            const allAnswers = [
                currentQ.answer,
                ...currentQ.incorrect_answers,
            ].sort(() => Math.random() - 0.5)
            setShuffledAnswers(allAnswers)
        }
    }, [currentQuestion, questions])

    const loadQuestions = async (): Promise<void> => {
        try {
            const response = await fetch(
                '/andii/sanrio-quiz/hello_kitty_trivia.json'
            )
            const allQuestions: Question[] = await response.json()

            // Select questions by difficulty
            const easy = allQuestions
                .filter((q) => q.difficulty === 'easy')
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
            const medium = allQuestions
                .filter((q) => q.difficulty === 'medium')
                .sort(() => Math.random() - 0.5)
                .slice(0, 4)
            const hard = allQuestions
                .filter((q) => q.difficulty === 'hard')
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)

            // Shuffle and combine
            const selectedQuestions = [...easy, ...medium, ...hard].sort(
                () => Math.random() - 0.5
            )

            setQuestions(selectedQuestions)
        } catch (error) {
            console.error('Failed to load questions:', error)
        }
    }

    const resetQuiz = (): void => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedAnswer(null)
        setShowResult(false)
        setQuizComplete(false)
        setShuffledAnswers([])
        loadQuestions()
    }

    const handleAnswerClick = (answer: string): void => {
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
                <QuizComplete score={score} total={10} onRetry={resetQuiz} />
            </div>
        )
    }

    const currentQ = questions[currentQuestion]

    return (
        <div className="quiz-container">
            <BackButton />
            <ScoreDisplay score={score} total={10} />

            <QuizQuestion
                questionNumber={currentQuestion + 1}
                totalQuestions={10}
                question={currentQ.question}
                answers={shuffledAnswers}
                selectedAnswer={selectedAnswer}
                correctAnswer={currentQ.answer}
                showResult={showResult}
                onAnswerClick={handleAnswerClick}
            />
        </div>
    )
}

export default SanrioQuiz
