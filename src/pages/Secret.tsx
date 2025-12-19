import { useState, useRef } from 'react'
import BackButton from '../components/BackButton'
import slackLogo from '../assets/slack.svg'
import './Secret.css'

function Secret() {
    const [isPoking, setIsPoking] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [isRateLimited, setIsRateLimited] = useState(false)
    const lastPokeTime = useRef(0)

    const handlePoke = async () => {
        const now = Date.now()
        const timeSinceLastPoke = now - lastPokeTime.current

        // Rate limit: 30 seconds between pokes
        if (timeSinceLastPoke < 30000) {
            setIsRateLimited(true)
            setTimeout(() => setIsRateLimited(false), 3000)
            return
        }

        setIsPoking(true)
        lastPokeTime.current = now

        try {
            const getWebhookUrl = () => {
                const encoded =
                    'aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vdHJpZ2dlcnMvRTAxNUdVR0QyVjYvMTAxNzQyODk2MDMxNTMvYmZiNjEwOTQ2MTViMTk0ODY3Y2FlNTY1YTA2ZDk1YmU='
                return atob(encoded)
            }
            await fetch(getWebhookUrl())
        } catch (error) {
            console.log('Webhook call failed:', error)
        }

        setTimeout(() => {
            setIsPoking(false)
            setShowNotification(true)
            setTimeout(() => setShowNotification(false), 3000)
        }, 1000)
    }

    return (
        <div className="secret-page slack-theme">
            <BackButton />
            <div className="slack-container">
                <div className="slack-header">
                    <img src={slackLogo} alt="Slack" className="slack-logo" />
                    <h1>Secret Slack Portal</h1>
                    <p className="description">
                        Press the button below to send a notification to Baby
                    </p>
                </div>

                <div className="poke-section">
                    <button
                        className={`poke-button ${isPoking ? 'poking' : ''}`}
                        onClick={handlePoke}
                        disabled={isPoking || isRateLimited}
                    >
                        {isPoking
                            ? 'Poking...'
                            : isRateLimited
                              ? 'Wait 30s'
                              : 'Poke'}
                    </button>

                    {showNotification && (
                        <div className="notification">
                            ✅ Baby has been notified
                        </div>
                    )}

                    {isRateLimited && (
                        <div className="notification rate-limit">
                            ⏰ Please wait before poking again
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Secret
