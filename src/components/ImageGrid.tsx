interface ImageGridProps {
    images: string[]
}

function ImageGrid({ images }: ImageGridProps) {
    return (
        <div className="image-grid-container">
            <h1 className="grid-title">My Favorite Pictures</h1>
            <div className="image-grid">
                {images.map((img: string, index: number) => (
                    <div key={img} className="grid-item">
                        <img src={img} alt={`Christmas memory ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
