export interface Question {
    question: string
    answer: string
    difficulty: 'easy' | 'medium' | 'hard'
    incorrect_answers: string[]
}

export interface QuizState {
    questions: Question[]
    currentQuestion: number
    score: number
    selectedAnswer: string | null
    showResult: boolean
    quizComplete: boolean
    shuffledAnswers: string[]
}
