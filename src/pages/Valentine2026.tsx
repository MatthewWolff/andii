import React, { useRef, useCallback, useEffect, useState } from 'react'
import BackButton from '../components/BackButton'

const DETECTION_RADIUS = 140
const MOVE_DISTANCE = 200

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
    icon: {
        width: 'min(260px, 80vw)',
        margin: '0 auto 20px',
        display: 'block',
        filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.12))',
        animation: 'float 3s ease-in-out infinite',
    },
    title: {
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
        color: '#ff1493',
        marginBottom: '2rem',
        textAlign: 'center' as const,
        fontFamily: "'Pacifico', cursive",
    },
    buttonZone: {
        position: 'relative' as const,
        width: 'min(520px, 90vw)',
        height: 'min(200px, 30vh)',
        margin: '0 auto',
    },
    yesButton: {
        position: 'absolute' as const,
        top: '50%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        padding: 'clamp(1rem, 3vw, 1.5rem) clamp(2rem, 4vw, 3rem)',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        backgroundColor: '#ff69b4',
        color: 'white',
        border: 'none',
        borderRadius: '999px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
        transition: 'transform 0.12s ease, background 0.12s ease',
        fontFamily: "'Pacifico', cursive",
    },
    noButton: {
        position: 'absolute' as const,
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        padding: 'clamp(1rem, 3vw, 1.5rem) clamp(2rem, 4vw, 3rem)',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        backgroundColor: '#e5e7eb',
        color: '#111827',
        border: 'none',
        borderRadius: '999px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
        fontFamily: "'Pacifico', cursive",
    },
}

const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n))

const Valentine2026: React.FC = () => {
    const zoneRef = useRef<HTMLDivElement>(null)
    const noButtonRef = useRef<HTMLButtonElement>(null)
    const yesButtonRef = useRef<HTMLButtonElement>(null)
    const [yesScale, setYesScale] = useState(1)

    useEffect(() => {
        document.title = 'Will you be my Valentine?'

        const interval = setInterval(() => {
            setYesScale((prev) => Math.min(prev + 0.05, 3))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const handleYes = useCallback(() => {
        window.location.href = '/andii/valentine-2026/yes/'
    }, [])

    const handleNoClick = useCallback(
        (e: React.MouseEvent | React.TouchEvent) => {
            e.preventDefault()
            if (!zoneRef.current || !noButtonRef.current) return

            const zone = zoneRef.current.getBoundingClientRect()
            const button = noButtonRef.current.getBoundingClientRect()

            const maxLeft = zone.width - button.width
            const maxTop = zone.height - button.height

            const newLeft = Math.random() * maxLeft
            const newTop = Math.random() * maxTop

            noButtonRef.current.style.left = `${newLeft}px`
            noButtonRef.current.style.top = `${newTop}px`
            noButtonRef.current.style.transform = 'none'
        },
        []
    )

    const moveNo = useCallback((px: number, py: number) => {
        if (!zoneRef.current || !noButtonRef.current) return

        const zone = zoneRef.current.getBoundingClientRect()
        const button = noButtonRef.current.getBoundingClientRect()

        let dx = button.left + button.width / 2 - px
        let dy = button.top + button.height / 2 - py
        const mag = Math.hypot(dx, dy) || 1
        dx /= mag
        dy /= mag

        let newLeft = button.left - zone.left + dx * MOVE_DISTANCE
        let newTop = button.top - zone.top + dy * MOVE_DISTANCE

        newLeft = clamp(newLeft, 0, zone.width - button.width)
        newTop = clamp(newTop, 0, zone.height - button.height)

        noButtonRef.current.style.left = `${newLeft}px`
        noButtonRef.current.style.top = `${newTop}px`
        noButtonRef.current.style.transform = 'none'
    }, [])

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!noButtonRef.current || !yesButtonRef.current) return

            const noButton = noButtonRef.current.getBoundingClientRect()
            const noDistance = Math.hypot(
                noButton.left + noButton.width / 2 - e.clientX,
                noButton.top + noButton.height / 2 - e.clientY
            )

            if (noDistance < DETECTION_RADIUS) {
                moveNo(e.clientX, e.clientY)
            }

            const yesButton = yesButtonRef.current.getBoundingClientRect()
            const yesDistance = Math.hypot(
                yesButton.left + yesButton.width / 2 - e.clientX,
                yesButton.top + yesButton.height / 2 - e.clientY
            )

            if (yesDistance < DETECTION_RADIUS) {
                const scale =
                    yesScale +
                    ((DETECTION_RADIUS - yesDistance) / DETECTION_RADIUS) * 0.5
                yesButtonRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`
            } else {
                yesButtonRef.current.style.transform = `translate(-50%, -50%) scale(${yesScale})`
            }
        },
        [moveNo, yesScale]
    )

    return (
        <div style={styles.container}>
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
            <BackButton to="/" />
            <div style={styles.card}>
                <img
                    src="/andii/valentine-2026/valentine_champ.png"
                    alt="Chamchi"
                    style={styles.icon}
                />
                <h1 style={styles.title}>Will you be my Valentine?</h1>
                <div
                    ref={zoneRef}
                    onMouseMove={handleMouseMove}
                    style={styles.buttonZone}
                >
                    <button
                        ref={yesButtonRef}
                        onClick={handleYes}
                        style={styles.yesButton}
                    >
                        Yes!
                    </button>
                    <button
                        ref={noButtonRef}
                        onClick={handleNoClick}
                        onTouchStart={handleNoClick}
                        style={styles.noButton}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Valentine2026
