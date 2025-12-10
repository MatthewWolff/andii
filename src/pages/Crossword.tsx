import BackButton from '../components/BackButton'
import './Crossword.css'

function Crossword() {
    return (
        <div className="crossword-container">
            <BackButton />
            <h1 className="crossword-title">The Crossword</h1>
            <iframe
                width="100%"
                height="500"
                className="crossword-iframe"
                frameBorder="0"
                src="https://crosswordlabs.com/embed/autumn-1391"
            />
        </div>
    )
}

export default Crossword
