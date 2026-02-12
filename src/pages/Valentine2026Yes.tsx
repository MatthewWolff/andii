import React, { useMemo, useEffect, useRef } from 'react'
import BackButton from '../components/BackButton'

const CELEBRATION_GIFS = [
    'https://media.tenor.com/MH_P_niyN6oAAAAi/%EB%AA%A8%EC%B0%8C%EB%83%A5.gif',
    'https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif',
    'https://media1.tenor.com/m/iebXwu0ca3UAAAAC/hello.gif',
    'https://media1.tenor.com/m/lqOqaIfUSDMAAAAC/rat-cute-cry.gif',
    'https://media.tenor.com/6jaDm2Pv6dUAAAAi/dare-aggie-dare-aggie-bunny.gif',
]

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffd6ed 0%, #ffc0e0 100%)',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
    },
    card: {
        width: 'min(720px, 92vw)',
        padding: '26px 22px',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '22px',
        textAlign: 'center' as const,
        boxShadow: '0 18px 60px rgba(0,0,0,0.15)',
    },
    title: {
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        color: '#ff1493',
        marginBottom: '2rem',
        fontFamily: "'Pacifico', cursive",
    },
    gif: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
    },
}

const Valentine2026Yes: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        document.title = 'Yay! 🎉💕'

        // Try to play audio
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(() => {
                    // If autoplay fails, play on first user interaction
                    const handleInteraction = () => {
                        audioRef.current?.play()
                        document.removeEventListener('click', handleInteraction)
                        document.removeEventListener(
                            'touchstart',
                            handleInteraction
                        )
                    }
                    document.addEventListener('click', handleInteraction)
                    document.addEventListener('touchstart', handleInteraction)
                })
            }
        }

        playAudio()
    }, [])

    const randomGif = useMemo(() => {
        return CELEBRATION_GIFS[
            Math.floor(Math.random() * CELEBRATION_GIFS.length)
        ]
    }, [])

    return (
        <div style={styles.container}>
            <BackButton to="/valentine-2026/" />
            <audio ref={audioRef} loop>
                <source
                    src="/andii/valentine-2026/yes/superman_audio.mp4"
                    type="audio/mp4"
                />
            </audio>
            <div style={styles.card}>
                <h1 style={styles.title}>Yay!</h1>
                <img src={randomGif} alt="Celebration" style={styles.gif} />
            </div>
        </div>
    )
}

export default Valentine2026Yes
