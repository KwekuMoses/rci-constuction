import ServicePage from '@/components/ServicePage'
import React from 'react'



const page = async () => {
    const haltagningWpId = 151

    return (
        <>
            <ServicePage id={haltagningWpId} />
        </>
    )
}

export default page