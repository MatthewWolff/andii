import { useState, useEffect } from 'react'

interface ImageSlideshowProps {
    images: string[]
    isActive: boolean
}

function ImageSlideshow({ images, isActive }: ImageSlideshowProps) {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const [prevImage, setPrevImage] = useState<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))

    useEffect(() => {
        // Preload next 2 images
        const nextIndex = (currentImage + 1) % images.length
        const nextNextIndex = (currentImage + 2) % images.length

        const indicesToLoad = [nextIndex, nextNextIndex]
        indicesToLoad.forEach((index) => {
            if (!loadedImages.has(index)) {
                const img = new Image()
                img.src = images[index]
                img.onload = () =>
                    setLoadedImages((prev) => new Set([...prev, index]))
            }
        })
    }, [currentImage, images.length, loadedImages])

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setPrevImage(currentImage)
                setCurrentImage((prev) => (prev + 1) % images.length)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [currentImage, isActive])

    return (
        <div className="slideshow">
            {images.map((img: string, index: number) =>
                loadedImages.has(index) ? (
                    <div
                        key={img}
                        className={`slide ${
                            index === currentImage
                                ? 'active'
                                : index === prevImage
                                  ? 'exiting'
                                  : ''
                        }`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ) : null
            )}
        </div>
    )
}

export default ImageSlideshow
