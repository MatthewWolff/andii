import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const handleBirthdayClick = () => {
    window.location.href = 'https://wolff.sh/AndiiBirthday/'
  }

  return (
    <div className="home">
      <h1>:3</h1>
      <nav className="menu">
        <button onClick={handleBirthdayClick} className="menu-item">
          Andii's Birthday 🎉
        </button>
        <Link to="/xmas-2025" className="menu-item">
          Merry Christmas! 🎄
        </Link>
      </nav>
    </div>
  )
}

export default Home
