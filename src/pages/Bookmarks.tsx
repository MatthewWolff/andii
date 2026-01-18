import { useEffect } from 'react'
import BackButton from '../components/BackButton'
import './Bookmarks.css'

interface Bookmark {
    name: string
    url: string
    icon: string
    description: string
}

const bookmarks: Bookmark[] = [
    {
        name: 'One Pace',
        url: 'https://onepace.net/',
        icon: '/andii/bookmarks/hat.png',
        description: 'Efficiency!!!!',
    },
]

function Bookmarks() {
    useEffect(() => {
        document.title = 'Bookmarks - For Miss Andii'
    }, [])

    return (
        <div className="bookmarks">
            <BackButton />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow border-0 title-container mb-4">
                            <div className="card-body text-center py-3">
                                <h1 className="mb-0">Bookmarks</h1>
                            </div>
                        </div>
                        <div className="bookmarks-grid">
                            {bookmarks.map((bookmark) => (
                                <a
                                    key={bookmark.name}
                                    href={bookmark.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bookmark-card"
                                >
                                    <img
                                        src={bookmark.icon}
                                        alt={bookmark.name}
                                        className="bookmark-icon"
                                    />
                                    <div className="bookmark-content">
                                        <h3>{bookmark.name}</h3>
                                        <p>{bookmark.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookmarks
