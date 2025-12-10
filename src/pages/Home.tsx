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
                    Merry Christmas! 🎄
                </Link>
                <Link to="/sanrio-quiz/" className="menu-item">
                    Sanrio Quiz 🎀
                </Link>
                {isLocalhost && (
                    <>
                        <Link to="/crossword/" className="menu-item">
                            The Crossword 🧩
                        </Link>
                        <Link to="/first-dates/" className="menu-item">
                            15 First Dates 💕
                        </Link>
                        <Link to="/chamchi-fan-art/" className="menu-item">
                            Chamchi Fan Art 🎨
                        </Link>
                    </>
                )}
                <Link to="/birthday/" className="menu-item">
                    Andii's Birthday 🎉
                </Link>
            </nav>
        </div>
    )
}

export default Home
