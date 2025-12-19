import { useEffect, useRef } from 'react'
import BackButton from '../components/BackButton'
import andiizzleImage from '../assets/andiizzle-minus-lip-skin.jpg'
import heavenImage from '../assets/heaven.jpg'
import charlieKirkAudio from '../assets/we-are-charlie-kirk.mp3'
import './SuperSecret.css'

function SuperSecret() {
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        // Play audio when component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(console.error)
        }
    }, [])

    return (
        <div className="super-secret-page">
            <BackButton to="/secret/" />
            <audio ref={audioRef} loop>
                <source src={charlieKirkAudio} type="audio/mpeg" />
            </audio>

            <div className="trumpet-left animated-trumpet">🎺</div>
            <div className="trumpet-right animated-trumpet">🎺</div>

            <div className="main-content">
                <div className="image-container">
                    <img
                        src={andiizzleImage}
                        alt="Andiizzle"
                        className="andiizzle-image"
                    />
                </div>
            </div>
        </div>
    )
}

export default SuperSecret
