import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'
import './LipSkinMemorial.css'

function LipSkinMemorial() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const location = useLocation()

    useEffect(() => {
        document.title = 'Lip Skin Memorial 👼'
        // Play audio when component mounts
        if (audioRef.current) {
            audioRef.current.play().catch(console.error)
        }
        return () => {
            document.title = 'For Miss Andii'
        }
    }, [])

    // Determine back button destination based on navigation state or referrer
    const getBackDestination = () => {
        // Check if we came from slack-portal via React Router state
        if (location.state?.from === '/slack-portal/') {
            return '/slack-portal/'
        }
        // Fallback to referrer check
        if (document.referrer.includes('/slack-portal')) {
            return '/slack-portal/'
        }
        return '/'
    }

    return (
        <div className="lip-skin-memorial-page">
            <BackButton to={getBackDestination()} />
            <h1 className="memorial-title">RIP Andii's lip skin</h1>
            <audio ref={audioRef} loop>
                <source
                    src="/andii/lip-skin-memorial/we-are-charlie-kirk.mp3"
                    type="audio/mpeg"
                />
            </audio>

            <div className="trumpet-left animated-trumpet">🎺</div>
            <div className="trumpet-right animated-trumpet">🎺</div>

            <div className="main-content">
                <div className="image-container">
                    <img
                        src="/andii/lip-skin-memorial/andiizzle-minus-lip-skin.jpg"
                        alt="Andiizzle"
                        className="andiizzle-image"
                    />
                </div>
            </div>
        </div>
    )
}

export default LipSkinMemorial
