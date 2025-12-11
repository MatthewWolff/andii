import { useEffect } from 'react'

interface ImageModalProps {
    imageSrc: string
    isOpen: boolean
    onClose: () => void
}

function ImageModal({ imageSrc, isOpen, onClose }: ImageModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    // Extract filename from the image source
    const filename = imageSrc.split('/').pop() || ''

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '20px',
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        fontSize: '20px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        zIndex: 1001,
                    }}
                >
                    ×
                </button>
                <img
                    src={imageSrc}
                    alt="Enlarged view"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontFamily: 'Quantico, sans-serif',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {filename}
                </div>
            </div>
        </div>
    )
}

export default ImageModal
