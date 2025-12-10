import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import Xmas2025 from './pages/Xmas2025'
import SanrioQuiz from './pages/SanrioQuiz'

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        // Handle 404 redirects with hash
        const hash = window.location.hash
        if (hash && hash.startsWith('#/andii/')) {
            const path = hash.replace('#/andii', '')
            navigate(path, { replace: true })
        }
    }, [navigate])

    return (
        <>
            <GoogleAnalytics />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/xmas-2025/" element={<Xmas2025 />} />
                <Route path="/sanrio-quiz/" element={<SanrioQuiz />} />
            </Routes>
        </>
    )
}

export default App
