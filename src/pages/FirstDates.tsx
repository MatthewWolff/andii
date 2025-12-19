import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import './FirstDates.css'

interface DateEntry {
    activity: string
    date: string
}

function FirstDates() {
    const [dates, setDates] = useState<DateEntry[]>([])
    const [shuffledDates, setShuffledDates] = useState<DateEntry[]>([])
    const [isComplete, setIsComplete] = useState(false)
    const [score, setScore] = useState(0)
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
    const [touchUsed, setTouchUsed] = useState(false)
    const [showDates, setShowDates] = useState(false)

    useEffect(() => {
        document.title = '20 First Dates 💕'
        loadDates()
        return () => {
            document.title = 'For Miss Andii'
        }
    }, [])

    const loadDates = async () => {
        try {
            const response = await fetch('/andii/first-dates/dates.json')
            const datesData: DateEntry[] = await response.json()
            setDates(datesData)
            setShuffledDates([...datesData].sort(() => Math.random() - 0.5))
        } catch (error) {
            console.error('Failed to load dates:', error)
        }
    }

    const checkOrder = () => {
        let correct = 0
        shuffledDates.forEach((date, index) => {
            if (dates[index] && date.activity === dates[index].activity) {
                correct++
            }
        })
        setScore(correct)
        setIsComplete(correct === dates.length)
    }

    const moveDate = (fromIndex: number, toIndex: number) => {
        const newDates = [...shuffledDates]
        const [movedDate] = newDates.splice(fromIndex, 1)
        newDates.splice(toIndex, 0, movedDate)
        setShuffledDates(newDates)
    }

    const resetGame = () => {
        setShuffledDates([...dates].sort(() => Math.random() - 0.5))
        setIsComplete(false)
        setScore(0)
    }

    const handleTouchStart = (index: number) => {
        setTouchUsed(true)
        handleCardClick(index)
    }

    const handleCardClick = (targetIndex: number) => {
        if (touchUsed) {
            setTouchUsed(false)
            return
        }

        if (draggedIndex === null) {
            // First tap - select this card
            setDraggedIndex(targetIndex)
        } else if (draggedIndex === targetIndex) {
            // Tapping the same card - deselect
            setDraggedIndex(null)
        } else {
            // Second tap on different card - swap them
            moveDate(draggedIndex, targetIndex)
            setDraggedIndex(null)
        }
    }

    if (dates.length === 0) {
        return (
            <div className="first-dates-loading">
                <BackButton />
                <p>Loading dates... 💕</p>
            </div>
        )
    }

    return (
        <div className="first-dates-container">
            <BackButton />
            <div className="first-dates-header">
                <h1 className="first-dates-title">Our First Dates</h1>
                <p className="first-dates-instructions">
                    Arrange our first dates in chronological order! (I am using
                    "dates" a bit loosely :3)
                    <br />
                    <span className="first-dates-instructions-sub">
                        Tap to select, then tap another to swap
                    </span>
                </p>
                <div className="first-dates-buttons">
                    <button
                        onClick={checkOrder}
                        className="first-dates-button first-dates-button-primary"
                    >
                        Check Order
                    </button>
                    <button
                        onClick={resetGame}
                        className="first-dates-button first-dates-button-secondary"
                    >
                        Shuffle Again
                    </button>
                    <button
                        onClick={() => setShowDates(!showDates)}
                        className="first-dates-button first-dates-button-secondary"
                    >
                        {showDates ? 'Hide Dates' : 'Show Dates'}
                    </button>
                </div>
                {score > 0 && (
                    <p
                        className={`first-dates-score ${isComplete ? 'first-dates-score-complete' : 'first-dates-score-incomplete'}`}
                    >
                        {isComplete
                            ? '🎉 Perfect! All dates in order!'
                            : `${score}/20 correct`}
                    </p>
                )}
            </div>

            <div className="first-dates-grid">
                {shuffledDates.map((date, index) => (
                    <div
                        key={`${date.activity}-${index}`}
                        className={`first-dates-card ${draggedIndex === index ? 'first-dates-card-selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                        onTouchStart={() => handleTouchStart(index)}
                        draggable
                        onDragStart={(e) =>
                            e.dataTransfer.setData(
                                'text/plain',
                                index.toString()
                            )
                        }
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                            e.preventDefault()
                            const fromIndex = parseInt(
                                e.dataTransfer.getData('text/plain')
                            )
                            moveDate(fromIndex, index)
                        }}
                    >
                        <div className="first-dates-card-activity">
                            {date.activity}
                        </div>
                        {showDates && (
                            <div className="first-dates-card-date">
                                {date.date}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FirstDates
