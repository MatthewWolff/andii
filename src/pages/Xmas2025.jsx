import { useState, useEffect } from 'react'
import './Xmas2025.css'

function Xmas2025() {
  const [currentImage, setCurrentImage] = useState(0)
  const [prevImage, setPrevImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set([0]))
  const images = [
    './xmas-2025/andii_fvded_roll.jpg',
    './xmas-2025/andii_pumpkin_forehead.jpg',
    './xmas-2025/andii_bipoc_climbing_helmet.jpg',
    './xmas-2025/andii_skiing_cute.jpg',
    './xmas-2025/andii_pumpkin_selfie.jpg',
    './xmas-2025/andii_vice.jpg',
    './xmas-2025/andii_sesame_ice_cream.jpg',
    './xmas-2025/andii_pumpkin_jump.jpg',
    './xmas-2025/andii_pike_place_hat.jpg',
    './xmas-2025/andii_portland.jpg',
    './xmas-2025/andii_selfie_so_good.jpg',
    './xmas-2025/andii_wine_yelp_smooch.jpg',
    './xmas-2025/andii_mew.jpg',
    './xmas-2025/andii_goodbye_party_group.jpg',
    './xmas-2025/andii_parking_lot_flowers.jpg',
    './xmas-2025/andii_hot_tub_fireball_cabin.jpg',
    './xmas-2025/andii_hand_splay.jpg',
    './xmas-2025/andii_valentine_gifts.jpg',
    './xmas-2025/andii_wine_yelp_pout.jpg',
    './xmas-2025/andii_fourth_of_july.jpg',
    './xmas-2025/andii_fvded_bliss.jpg',
    './xmas-2025/andii_banana_bread_oooooh.jpg',
    './xmas-2025/andii_belmont_lounge_cute.jpg'
  ]

  useEffect(() => {
    // Preload next 2 images
    const nextIndex = (currentImage + 1) % images.length
    const nextNextIndex = (currentImage + 2) % images.length
    
    const indicesToLoad = [nextIndex, nextNextIndex]
    indicesToLoad.forEach(index => {
      if (!loadedImages.has(index)) {
        const img = new Image()
        img.src = images[index]
        img.onload = () => setLoadedImages(prev => new Set([...prev, index]))
      }
    })
  }, [currentImage, images.length, loadedImages])

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage)
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <div className="xmas-container">
      <div className="slideshow">
        {images.map((img, index) => 
          loadedImages.has(index) ? (
            <div
              key={img}
              className={`slide ${
                index === currentImage ? 'active' : 
                index === prevImage ? 'exiting' : ''
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ) : null
        )}
      </div>
      <div className="content">
        <h1>Merry Christmas! 🎄</h1>
        <p>
          Wishing you a wonderful holiday season filled with joy, love, and happiness!
        </p>
        <p>
          May this Christmas bring you warmth and cheer, and may the new year ahead be filled with endless possibilities.
        </p>
      </div>
    </div>
  )
}

export default Xmas2025
