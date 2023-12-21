import React from 'react'
import Script from 'next/script'

const GoogleTracker = () => {
    let GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    return (
        <div>
            <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
        </div>
    )
}

export default GoogleTracker