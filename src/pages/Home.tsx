import { Link } from 'react-router-dom'
import FallingIcons from '../components/FallingIcons'
import XmasImagePreloader from '../components/XmasImagePreloader'
import './Home.css'

function Home() {
    const isLocalhost = window.location.hostname === 'localhost'

    return (
        <div className="home">
            <XmasImagePreloader />
            <FallingIcons />
            <h1>:3</h1>
            <nav className="menu">
                <Link to="/xmas-2025/" className="menu-item">
                    <span>Merry Christmas!</span>
                    <span>🎄</span>
                </Link>
                <Link to="/sanrio-quiz/" className="menu-item">
                    <span>Sanrio Quiz</span>
                    <span>🎀</span>
                </Link>
                <Link to="/crossword/" className="menu-item">
                    <span>The Crossword</span>
                    <span>🧩</span>
                </Link>
                <Link to="/first-dates/" className="menu-item">
                    <span>20 First Dates</span>
                    <span>💕</span>
                </Link>
                {isLocalhost && (
                    <>
                        <Link to="/chamchi-fan-art/" className="menu-item">
                            <span>Chamchi Fan Art</span>
                            <span>🎨</span>
                        </Link>
                    </>
                )}
                <Link to="/birthday/" className="menu-item">
                    <span>Andii's Birthday</span>
                    <span>🎉</span>
                </Link>
            </nav>
        </div>
    )
}

export default Home
