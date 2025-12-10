import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Xmas2025 from './pages/Xmas2025'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/xmas-2025/" element={<Xmas2025 />} />
        </Routes>
    )
}

export default App
