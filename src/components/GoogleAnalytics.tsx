import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
    interface Window {
        gtag?: (...args: any[]) => void
        dataLayer?: any[]
    }
}

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
            const getPageTitle = (pathname: string): string => {
                switch (pathname) {
                    case '/':
                        return 'andii'
                    case '/xmas-2025/':
                        return 'xmas-2025'
                    case '/sanrio-quiz/':
                        return 'sanrio-quiz'
                    default:
                        return pathname.replace(/\//g, '') || 'unknown'
                }
            }

            window.gtag('config', 'G-YX630D4XCV', {
                page_path: location.pathname,
                page_title: getPageTitle(location.pathname),
            })
        }
    }, [location])

    return null
}

export default GoogleAnalytics
