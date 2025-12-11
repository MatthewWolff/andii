import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <img
                src="/andii/birthday/Chamchi.jpg"
                alt="Chamchi looking confused"
                className="not-found-image"
            />
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-message">
                Oops! The page you're looking for doesn't exist. Maybe it got
                sacrificed by the cult of Andii? 🤔
            </p>
            <Link to="/" className="not-found-button">
                Go Home
            </Link>
        </div>
    )
}

export default NotFound
