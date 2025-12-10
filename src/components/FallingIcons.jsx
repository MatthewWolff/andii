import { useEffect } from 'react'

function FallingIcons({
    iconSrc = '/andii/favicon/favicon.ico',
    spawnRate = 2000,
}) {
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

        const interval = setInterval(createFallingIcon, spawnRate)
        return () => clearInterval(interval)
    }, [iconSrc, spawnRate])

    return null
}

export default FallingIcons
