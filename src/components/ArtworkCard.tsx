interface ArtworkCardProps {
    imageSrc: string
    title: string
    artist: string
    media: string
    invisible?: boolean
}

function ArtworkCard({
    imageSrc,
    title,
    artist,
    media,
    invisible = false,
}: ArtworkCardProps) {
    if (invisible) {
        return (
            <div className="invisible-spacer">
                {/* Invisible spacer for desktop layout */}
            </div>
        )
    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                textAlign: 'center',
                maxWidth: '350px',
                margin: '15px',
                border: '3px solid #F3B2CB',
                transform: 'rotate(-1deg)',
                transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)')
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'rotate(-1deg)')
            }
        >
            <img
                src={imageSrc}
                alt={title}
                style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    border: '2px solid #ddd',
                }}
            />
            <h3
                style={{
                    fontFamily: 'Bubblegum Sans, cursive',
                    fontSize: '1.2rem',
                    color: '#333',
                    margin: '8px 0',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                }}
            >
                "{title}"
            </h3>
            <p
                style={{
                    fontFamily: 'Quantico, sans-serif',
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: '5px 0',
                    fontWeight: 'bold',
                }}
            >
                by {artist}
            </p>
            <p
                style={{
                    fontFamily: 'Quantico, sans-serif',
                    fontSize: '0.8rem',
                    color: '#888',
                    fontStyle: 'italic',
                    margin: '5px 0',
                }}
            >
                {media}
            </p>
        </div>
    )
}

export default ArtworkCard
