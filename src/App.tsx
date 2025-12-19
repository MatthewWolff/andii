import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import GoogleAnalytics from './components/GoogleAnalytics'
import FallingIcons from './components/FallingIcons'
import Home from './pages/Home'
import Xmas2025 from './pages/Xmas2025'
import SanrioQuiz from './pages/SanrioQuiz'
import Birthday from './pages/Birthday'
import Crossword from './pages/Crossword'
import FirstDates from './pages/FirstDates'
import ChamchiFanArt from './pages/ChamchiFanArt'
import SlackPortal from './pages/SlackPortal'
import LipSkinMemorial from './pages/LipSkinMemorial'
import NotFound from './pages/NotFound'

function App() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        // Handle 404 redirects with hash
        const hash = window.location.hash
        if (hash && hash.startsWith('#/')) {
            const path = hash.replace('#', '')
            navigate(path, { replace: true })
        }
    }, [navigate])

    return (
        <>
            <GoogleAnalytics />
            <FallingIcons fadeOut={location.pathname !== '/'} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/xmas-2025/" element={<Xmas2025 />} />
                <Route path="/sanrio-quiz/" element={<SanrioQuiz />} />
                <Route path="/birthday/" element={<Birthday />} />
                <Route path="/crossword/" element={<Crossword />} />
                <Route path="/first-dates/" element={<FirstDates />} />
                <Route path="/chamchi-fan-art/" element={<ChamchiFanArt />} />
                <Route path="/slack-portal/" element={<SlackPortal />} />
                <Route
                    path="/lip-skin-memorial/"
                    element={<LipSkinMemorial />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
