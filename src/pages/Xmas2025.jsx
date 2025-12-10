import React, { useState } from 'react'
import ImageSlideshow from '../components/ImageSlideshow'
import ImageGrid from '../components/ImageGrid'
import ViewToggleButton from '../components/ViewToggleButton'
import BackButton from '../components/BackButton'
import SoundButton from '../components/SoundButton'
import './Xmas2025.css'

function Xmas2025() {
    const [showGrid, setShowGrid] = useState(false)
    const images = [
        './xmas-2025/andii_skiing_cute.jpg',
        './xmas-2025/andii_pumpkin_forehead.jpg',
        './xmas-2025/andii_fvded_bliss.jpg',
        './xmas-2025/andii_vice.jpg',
        './xmas-2025/andii_belmont_lounge_cute.jpg',
        './xmas-2025/andii_valentine_gifts.jpg',
        './xmas-2025/andii_portland.jpg',
        './xmas-2025/andii_parking_lot_flowers.jpg',
        './xmas-2025/andii_wine_yelp_pout.jpg',
        './xmas-2025/andii_selfie_so_good.jpg',
        './xmas-2025/andii_hot_tub_fireball_cabin.jpg',
        './xmas-2025/andii_pumpkin_jump.jpg',
        './xmas-2025/andii_pumpkin_selfie.jpg',
        './xmas-2025/andii_sesame_ice_cream.jpg',
        './xmas-2025/andii_pike_place_hat.jpg',
        './xmas-2025/andii_fourth_of_july.jpg',
        './xmas-2025/andii_wine_yelp_smooch.jpg',
        './xmas-2025/andii_hand_splay.jpg',
        './xmas-2025/andii_mew.jpg',
        './xmas-2025/andii_goodbye_party_group.jpg',
        './xmas-2025/andii_fvded_roll.jpg',
        './xmas-2025/andii_bipoc_climbing_helmet.jpg',
        './xmas-2025/andii_banana_bread_oooooh.jpg',
        './xmas-2025/andii_power.jpg',
    ]

    return (
        <div className="xmas-container">
            <BackButton />

            {!showGrid && (
                <>
                    <ImageSlideshow images={images} isActive={!showGrid} />
                    <div className="content">
                        <h1>Merry Christmas! 🎄</h1>
                        <p>
                            Wishing you a wonderful holiday season filled with
                            joy, love, and happiness!
                        </p>
                        <p>
                            May this Christmas bring you warmth and cheer, and
                            may the new year ahead be filled with endless
                            possibilities.
                        </p>
                    </div>
                </>
            )}

            {showGrid && <ImageGrid images={images} />}

            <ViewToggleButton
                showGrid={showGrid}
                onToggle={() => setShowGrid(!showGrid)}
            />

            <SoundButton
                audioSrc="./xmas-2025/minecraft-villager.mp3"
                className="ough-btn"
            >
                Ough
            </SoundButton>
        </div>
    )
}

export default Xmas2025
