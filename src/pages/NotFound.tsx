import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div
            style={{
                backgroundColor: '#CCCCFF',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Bubblegum Sans, cursive',
                color: '#333',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1
                style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    margin: '0 0 20px 0',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                404
            </h1>
            <img
                src="/andii/birthday/Chamchi.jpg"
                alt="Chamchi looking confused"
                style={{
                    maxWidth: '300px',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '0 0 20px 0',
                }}
            />
            <h2
                style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    margin: '0 0 30px 0',
                    fontWeight: 'normal',
                }}
            >
                Page Not Found
            </h2>
            <p
                style={{
                    fontSize: '1.2rem',
                    margin: '0 0 40px 0',
                    maxWidth: '500px',
                    lineHeight: '1.5',
                }}
            >
                Oops! The page you're looking for doesn't exist. Maybe it got
                sacrificed by the cult of Andii? 🤔
            </p>
            <Link
                to="/"
                style={{
                    padding: '15px 30px',
                    backgroundColor: '#F3B2CB',
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    transition: 'transform 0.2s, background-color 0.2s',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.backgroundColor = '#f5c4d8'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.backgroundColor = '#F3B2CB'
                }}
            >
                Go Home
            </Link>
        </div>
    )
}

export default NotFound
