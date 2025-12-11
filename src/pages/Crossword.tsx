import BackButton from '../components/BackButton'
import './Crossword.css'

function Crossword() {
    return (
        <div className="crossword-container">
            <BackButton />
            <h1 className="crossword-title">The Crossword</h1>
            <p
                style={{
                    fontSize: '1.1rem',
                    color: '#555',
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto 20px auto',
                    fontFamily: 'Quantico, sans-serif',
                }}
            >
                A personalized crossword puzzle with clues that only Miss Andii
                will know! Test your knowledge 👀
            </p>
            <iframe
                width="100%"
                height="70vh"
                className="crossword-iframe"
                frameBorder="0"
                src="https://crosswordlabs.com/embed/a-most-devious-crossword"
            />
        </div>
    )
}

export default Crossword
