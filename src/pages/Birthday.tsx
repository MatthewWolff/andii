import { useEffect } from 'react'

function Birthday() {
    useEffect(() => {
        // Redirect to static HTML birthday page
        window.location.href = '/andii/birthday/34.html'
    }, [])

    return (
        <div
            style={{
                backgroundColor: '#CCCCFF',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                fontFamily: 'Bubblegum Sans, cursive',
            }}
        >
            Redirecting to birthday page... 🎉
        </div>
    )
}

export default Birthday
