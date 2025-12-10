import { Link } from 'react-router-dom'
import FallingIcons from '../components/FallingIcons'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <FallingIcons />
            <h1>:3</h1>
            <nav className="menu">
                <Link to="/xmas-2025/" className="menu-item">
                    Merry Christmas! 🎄
                </Link>
                <Link to="/sanrio-quiz/" className="menu-item">
                    Sanrio Quiz 🎀
                </Link>
                <Link to="/birthday/" className="menu-item">
                    Andii's Birthday 🎉
                </Link>
            </nav>
        </div>
    )
}

export default Home
