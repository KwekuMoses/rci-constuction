import ComingSoon from '@/components/coming-soon/ComingSoon'
import React from 'react'

import Title from '@/components/Title/Title'

const page = () => {
    const tyresöWpId = 210
    const title = "Täby"

    return (
        <div>
            <ComingSoon title={title} />
        </div>
    )
}

export default page