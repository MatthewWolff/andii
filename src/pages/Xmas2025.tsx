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
        '/andii/xmas-2025/andii_birthday_gifts.jpg',
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
                            Hello my sweet. This has been an amazing and
                            terrible year, and I'm really glad to have gone
                            through it with you. You're one of the best gifts I
                            could have asked for :') You're patient, you're the
                            SWEETEST human I've EVER met, and I'm so constantly
                            impressed by your resilience and diligence. Being
                            with you just makes me want to be better. I love how
                            well you communicate about things and how naturally
                            being an amazing partner comes to you. I'm also
                            grateful for Chamchi.
                        </p>

                        <p>
                            When we're apart and I'm looking at pictures of you,
                            I feel such a tug on my heartstrings. You're
                            beautiful, you're enduring, you're passionate, and
                            you're just all around lovely. Supporting you and
                            making you smile is an honor and a duty I can hope I
                            can fulfill as well you always do.
                        </p>

                        <p>
                            I know we're apart this Christmas, but I'm soOOooooO
                            looking forward to going into the New Year with you
                            (AND making you drag me and my snowboard out of the
                            flat zones in Colorado, hehe). Merry Christmas :)
                            thank you for being you and for being mine.
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
