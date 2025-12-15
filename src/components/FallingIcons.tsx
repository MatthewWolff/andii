import { useEffect, useState } from 'react'

interface FallingIconsProps {
    iconSrc?: string
    fadeOut?: boolean
}

function FallingIcons({
    iconSrc = '/andii/favicon/favicon.ico',
    fadeOut = false,
}: FallingIconsProps) {
    const [spawnRate, setSpawnRate] = useState(() =>
        Math.max(500, 2200 - window.innerWidth)
    )

    useEffect(() => {
        const updateSpawnRate = () => {
            setSpawnRate(Math.max(500, 2200 - window.innerWidth))
        }

        window.addEventListener('resize', updateSpawnRate)
        return () => window.removeEventListener('resize', updateSpawnRate)
    }, [])

    useEffect(() => {
        const createFallingIcon = () => {
            const icon = document.createElement('img')
            icon.src = iconSrc
            icon.className = 'falling-icon'
            icon.style.left = Math.random() * 100 + 'vw'
            icon.style.animationDuration = Math.random() * 4 + 6 + 's'
            document.body.appendChild(icon)

            setTimeout(() => {
                icon.remove()
            }, 20000)
        }

        if (!fadeOut) {
            const interval = setInterval(createFallingIcon, spawnRate)
            return () => clearInterval(interval)
        }
    }, [iconSrc, spawnRate, fadeOut])

    useEffect(() => {
        if (fadeOut) {
            const icons = document.querySelectorAll('.falling-icon')
            icons.forEach((icon) => {
                ;(icon as HTMLElement).style.transition = 'opacity 0.5s'
                ;(icon as HTMLElement).style.opacity = '0'
            })
        }
    }, [fadeOut])

    return null
}

export default FallingIcons
