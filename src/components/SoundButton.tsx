import { useState } from 'react'

interface SoundButtonProps {
    audioSrc: string
    children: React.ReactNode
    className?: string
}

function SoundButton({
    audioSrc,
    children,
    className = 'sound-btn',
}: SoundButtonProps) {
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
