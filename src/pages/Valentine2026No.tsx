import React, { useEffect } from 'react'
import BackButton from '../components/BackButton'

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffd6ed 0%, #ffc0e0 100%)',
        padding: '20px',
    },
    image: {
        width: 'min(300px, 80vw)',
        marginBottom: '2rem',
    },
    text: {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: 'bold' as const,
        color: '#ff1493',
        textAlign: 'center' as const,
        fontFamily: "'Pacifico', cursive",
    },
}

const Valentine2026No: React.FC = () => {
    useEffect(() => {
        document.title = 'No????'
    }, [])

    return (
        <div style={styles.container}>
            <BackButton to="/valentine-2026/" />
            <img
                src="/andii/valentine-2026/no/sad_chamchi.png"
                alt="Sad Chamchi"
                style={styles.image}
            />
            <h1 style={styles.text}>Why would you go to the "No" page?</h1>
        </div>
    )
}

export default Valentine2026No
