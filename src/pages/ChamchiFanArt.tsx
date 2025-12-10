import BackButton from '../components/BackButton'
import ArtworkCard from '../components/ArtworkCard'
import './ChamchiFanArt.css'

function ChamchiFanArt() {
    const artworks = [
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: 'Sleepy Chamchi',
            artist: 'Sarah M.',
            media: 'Colored pencils on napkin',
        },
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: 'Chamchi in Space',
            artist: 'Alex K.',
            media: 'Crayon and glitter',
        },
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: 'Royal Chamchi',
            artist: 'Emma L.',
            media: 'Watercolor and tears of joy',
        },
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: "Chamchi's Dream",
            artist: 'Mike R.',
            media: 'Finger paint and hope',
        },
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: 'Super Chamchi',
            artist: 'Luna P.',
            media: 'Sharpie on pizza box',
        },
        {
            imageSrc: '/andii/favicon/web-app-manifest-512x512.png',
            title: "Chamchi's Adventure",
            artist: 'Jamie T.',
            media: 'Highlighter and pure love',
        },
    ]

    return (
        <div className="chamchi-container">
            <BackButton />
            <div className="chamchi-header">
                <h1 className="chamchi-title">Chamchi Fan Art Gallery</h1>
                <p className="chamchi-description">
                    A precious collection of hand-drawn masterpieces celebrating
                    our beloved fluffy overlord
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
                    />
                ))}
            </div>
        </div>
    )
}

export default ChamchiFanArt
