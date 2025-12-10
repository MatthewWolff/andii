import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function GoogleAnalytics() {
    const location = useLocation()

    useEffect(() => {
        // Load gtag script if not already loaded
        if (!window.gtag) {
            const script = document.createElement('script')
            script.async = true
            script.src =
                'https://www.googletagmanager.com/gtag/js?id=G-YX630D4XCV'
            document.head.appendChild(script)

            const configScript = document.createElement('script')
            configScript.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YX630D4XCV');
            `
            document.head.appendChild(configScript)
        }
    }, [])

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', 'G-YX630D4XCV', {
                page_path: location.pathname,
                page_title: location.pathname.replace('/', '') || 'home',
            })
        }
    }, [location])

    return null
}

export default GoogleAnalytics
