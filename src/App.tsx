import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import Xmas2025 from './pages/Xmas2025'
import SanrioQuiz from './pages/SanrioQuiz'
import Birthday from './pages/Birthday'
import Crossword from './pages/Crossword'
import FirstDates from './pages/FirstDates'
import ChamchiFanArt from './pages/ChamchiFanArt'

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
                <Route path="/birthday/" element={<Birthday />} />
                <Route path="/crossword/" element={<Crossword />} />
                <Route path="/first-dates/" element={<FirstDates />} />
                <Route path="/chamchi-fan-art/" element={<ChamchiFanArt />} />
            </Routes>
        </>
    )
}

export default App
