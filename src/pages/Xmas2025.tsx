import { useState, useEffect } from 'react'
import ImageSlideshow from '../components/ImageSlideshow'
import ImageGrid from '../components/ImageGrid'
import ViewToggleButton from '../components/ViewToggleButton'
import BackButton from '../components/BackButton'
import SoundButton from '../components/SoundButton'
import './Xmas2025.css'

function Xmas2025() {
    const [showGrid, setShowGrid] = useState(false)

    useEffect(() => {
        document.title = 'Merry Christmas! 🎄'

        // Preload audio
        const audio = new Audio('/andii/xmas-2025/minecraft-villager.mp3')
        audio.preload = 'auto'

        return () => {
            document.title = 'For Miss Andii'
        }
    }, [])
    const images = [
        '/andii/xmas-2025/andii_skiing_cute.jpg',
        '/andii/xmas-2025/andii_pumpkin_forehead.jpg',
        '/andii/xmas-2025/andii_fvded_bliss.jpg',
        '/andii/xmas-2025/andii_vice.jpg',
        '/andii/xmas-2025/andii_belmont_lounge_cute.jpg',
        '/andii/xmas-2025/andii_valentine_gifts.jpg',
        '/andii/xmas-2025/andii_portland.jpg',
        '/andii/xmas-2025/andii_parking_lot_flowers.jpg',
        '/andii/xmas-2025/andii_wine_yelp_pout.jpg',
        '/andii/xmas-2025/andii_selfie_so_good.jpg',
        '/andii/xmas-2025/andii_hot_tub_fireball_cabin.jpg',
        '/andii/xmas-2025/andii_pumpkin_jump.jpg',
        '/andii/xmas-2025/andii_pumpkin_selfie.jpg',
        '/andii/xmas-2025/andii_sesame_ice_cream.jpg',
        '/andii/xmas-2025/andii_pike_place_hat.jpg',
        '/andii/xmas-2025/andii_fourth_of_july.jpg',
        '/andii/xmas-2025/andii_hotel_bar_smooch.jpg',
        '/andii/xmas-2025/andii_hand_splay.jpg',
        '/andii/xmas-2025/andii_mew.jpg',
        '/andii/xmas-2025/andii_goodbye_party_group.jpg',
        '/andii/xmas-2025/andii_fvded_roll.jpg',
        '/andii/xmas-2025/andii_bipoc_climbing_helmet.jpg',
        '/andii/xmas-2025/andii_banana_bread_oooooh.jpg',
        '/andii/xmas-2025/andii_power.jpg',
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
                            Oh, my sweet. It has been a crazy year, and I'm glad
                            to have gone through it with you. You're one of the
                            best gifts I could ask for—you're patient, you're
                            gentle, you communicate, and you stop at nothing to
                            take care of me and bring me up.
                        </p>
                        <p>
                            Whenever we're apart and I think about you and how
                            incredible you are, my heart aches. You're one of a
                            kind and I'm lucky to know you. NooOOoOOobody is as
                            sweet, enduring, and compassionate. Supporting you
                            is an honor and duty I hope I can fulfill somewhere
                            near as well as you do.
                        </p>
                        <p>
                            May this Christmas bring us warmth and cheer, and
                            may the new year ahead be filled with joy and love
                            :3
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
                audioSrc="/andii/xmas-2025/minecraft-villager.mp3"
                className="ough-btn"
            >
                Ough
            </SoundButton>
        </div>
    )
}

export default Xmas2025
