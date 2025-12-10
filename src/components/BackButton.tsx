import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <Link to="/" className="back-btn">
            ← Back
        </Link>
    )
}

export default BackButton
