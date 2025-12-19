import { Link } from 'react-router-dom'

interface BackButtonProps {
    to?: string
}

function BackButton({ to = '/' }: BackButtonProps) {
    return (
        <Link to={to} className="back-btn">
            ← Back
        </Link>
    )
}

export default BackButton
