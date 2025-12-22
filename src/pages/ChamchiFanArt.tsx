import { useEffect } from 'react'
import BackButton from '../components/BackButton'
import ArtworkCard from '../components/ArtworkCard'
import './ChamchiFanArt.css'

function ChamchiFanArt() {
    useEffect(() => {
        document.title = 'Chamchi Fan Art 🎨'
        return () => {
            document.title = 'For Miss Andii'
        }
    }, [])
    const artworks = [
        {
            imageSrc: '/andii/chamchi-fan-art/nanoartistic.jpg',
            title: 'A Beast, Confined',
            artist: 'nanoartistic',
            media: 'Digital Art',
        },
        {
            imageSrc: '/andii/chamchi-fan-art/daydraw.jpg',
            title: 'Boy Blossom',
            artist: 'daydraw',
            media: 'Digital Art',
        },
        {
            imageSrc: '/andii/chamchi-fan-art/kmalviya8399.jpg',
            title: 'Behold: A Noodle',
            artist: 'kmalviya8399',
            media: 'Digital Art',
        },
        {
            imageSrc: '/andii/chamchi-fan-art/evgenytiniansky.jpg',
            title: 'The Laughing Man',
            artist: 'evgenytiniansky',
            media: 'Digital Art',
        },
        {
            imageSrc: '/andii/chamchi-fan-art/izamkurniawan1.jpg',
            title: 'Chamchi Study 1',
            artist: 'izamkurniawan',
            media: 'Digital Art',
        },
        {
            imageSrc: '/andii/chamchi-fan-art/miphz94.jpg',
            title: 'Dinner Time',
            artist: 'miphz94',
            media: 'Digital Art',
        },
        {
            imageSrc: '',
            title: '',
            artist: '',
            media: '',
            invisible: true,
        },
        {
            imageSrc: '/andii/chamchi-fan-art/izamkurniawan2.jpg',
            title: 'Chamchi Study 2',
            artist: 'izamkurniawan',
            media: 'Digital Art',
        },
    ]

    return (
        <div className="chamchi-container">
            <BackButton />
            <div className="chamchi-header">
                <h1 className="chamchi-title">Chamchi Fan Art Gallery</h1>
                <p className="chamchi-description">
                    I paid a bunch of artists on Fiverr to pay tribute to
                    Chamchi and all of his mischievous excellence. Look at the
                    beautiful boy. Look at our precious goblin.
                </p>
            </div>

            <div className="chamchi-gallery">
                {artworks.map((artwork, index) => (
                    <ArtworkCard
                        key={index}
                        imageSrc={artwork.imageSrc}
                        title={artwork.title}
                        artist={artwork.artist}
                        media={artwork.media}
                        invisible={artwork.invisible}
                    />
                ))}
            </div>
        </div>
    )
}

export default ChamchiFanArt
