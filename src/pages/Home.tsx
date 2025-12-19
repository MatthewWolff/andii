import { Link } from 'react-router-dom'
import { useState } from 'react'
import XmasImagePreloader from '../components/XmasImagePreloader'
import './Home.css'

function Home() {
    const [secretClicks, setSecretClicks] = useState(0)
    const [showSecret, setShowSecret] = useState(false)

    const handleSecretClick = () => {
        const newClicks = secretClicks + 1
        setSecretClicks(newClicks)
        if (newClicks >= 3) {
            setShowSecret(true)
        }
    }
    return (
        <div className="home">
            <XmasImagePreloader />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow border-0 title-container mb-4">
                            <div className="card-body text-center py-3">
                                <h1 className="mb-0">The Andizzle Zone</h1>
                            </div>
                        </div>
                        <div className="card shadow border-0 menu-container">
                            <div className="card-body p-4">
                                <nav className="menu">
                                    <Link
                                        to="/xmas-2025/"
                                        className="menu-item"
                                    >
                                        <span>Merry Christmas!</span>
                                        <span>🎄</span>
                                    </Link>
                                    <Link
                                        to="/sanrio-quiz/"
                                        className="menu-item"
                                    >
                                        <span>Sanrio Quiz</span>
                                        <span>🎀</span>
                                    </Link>
                                    <Link
                                        to="/crossword/"
                                        className="menu-item"
                                    >
                                        <span>The Crossword</span>
                                        <span>🧩</span>
                                    </Link>
                                    <Link
                                        to="/first-dates/"
                                        className="menu-item"
                                    >
                                        <span>20 First Dates</span>
                                        <span>💕</span>
                                    </Link>
                                    <Link
                                        to="/chamchi-fan-art/"
                                        className="menu-item"
                                    >
                                        <span>Chamchi Fan Art</span>
                                        <span>🎨</span>
                                    </Link>
                                    <Link to="/birthday/" className="menu-item">
                                        <span>Andii's Birthday</span>
                                        <span>🎉</span>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div
                            className={`secret-button-container ${showSecret ? 'revealed' : ''}`}
                            onClick={handleSecretClick}
                        >
                            {showSecret && (
                                <Link to="/secret/" className="secret-button">
                                    <span>???</span>
                                    <span>🔮</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
