import { useState } from 'react'

function SoundButton({ audioSrc, children, className = 'sound-btn' }) {
    const [isPlaying, setIsPlaying] = useState(false)

    const playSound = () => {
        if (isPlaying) return

        setIsPlaying(true)
        const audio = new Audio(audioSrc)
        audio.play().catch((err) => console.log('Audio play failed:', err))

        setTimeout(() => {
            setIsPlaying(false)
        }, 1000)
    }

    return (
        <button className={className} onClick={playSound} disabled={isPlaying}>
            {children}
        </button>
    )
}

export default SoundButton
