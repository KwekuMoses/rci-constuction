import ServicePage from '@/components/service-page/ServicePage'
import React from 'react'



const page = async () => {
    const rivningWpId = 150

    return (
        <>
            <ServicePage id={rivningWpId} />
        </>
    )
}

export default page