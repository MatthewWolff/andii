import { useState } from 'react'
import ImageModal from './ImageModal'

interface ImageGridProps {
    images: string[]
}

function ImageGrid({ images }: ImageGridProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc)
    }

    const handleCloseModal = () => {
        setSelectedImage(null)
    }

    return (
        <div className="image-grid-container">
            <h1 className="grid-title">My Favorite Pictures</h1>
            <div className="image-grid">
                {images.map((img: string, index: number) => {
                    const filename =
                        img.split('/').pop()?.replace('.jpg', '') ||
                        `image-${index + 1}`
                    return (
                        <div key={img} className="grid-item">
                            <img
                                src={img}
                                alt={filename}
                                onClick={() => handleImageClick(img)}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    )
                })}
            </div>
            <ImageModal
                imageSrc={selectedImage || ''}
                isOpen={!!selectedImage}
                onClose={handleCloseModal}
            />
        </div>
    )
}

export default ImageGrid
