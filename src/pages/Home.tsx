import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FallingIcons from '../components/FallingIcons'
import './Home.css'

function Home() {
    useEffect(() => {
        // Preload first 4 Christmas images in the same order as Xmas2025.tsx
        const imageNames = [
            'andii_skiing_cute.jpg',
            'andii_pumpkin_forehead.jpg',
            'andii_fvded_bliss.jpg',
            'andii_vice.jpg',
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

    return (
        <div className="home">
            <FallingIcons />
            <h1>:3</h1>
            <nav className="menu">
                <Link to="/xmas-2025/" className="menu-item">
                    Merry Christmas! 🎄
                </Link>
                <Link to="/sanrio-quiz/" className="menu-item">
                    Sanrio Quiz 🎀
                </Link>
                <Link to="/birthday/" className="menu-item">
                    Andii's Birthday 🎉
                </Link>
            </nav>
        </div>
    )
}

export default Home
