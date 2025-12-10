import { useEffect } from 'react'

function XmasImagePreloader() {
    useEffect(() => {
        // Preload first 5 Christmas images in the same order as Xmas2025.tsx
        const imageNames = [
            'andii_skiing_cute.jpg',
            'andii_pumpkin_forehead.jpg',
            'andii_fvded_bliss.jpg',
            'andii_vice.jpg',
            'andii_belmont_lounge_cute.jpg',
        ]

        // Start preloading after a short delay to not block initial page load
        const timer = setTimeout(() => {
            imageNames.forEach((imageName, index) => {
                // Stagger the preloading to avoid overwhelming the browser
                setTimeout(() => {
                    const img = new Image()
                    img.src = `/andii/xmas-2025/${imageName}`
                }, index * 100) // 100ms delay between each image
            })
        }, 1000) // Start after 1 second

        return () => clearTimeout(timer)
    }, [])

    return null // This component doesn't render anything
}

export default XmasImagePreloader
