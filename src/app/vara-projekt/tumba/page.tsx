import ComingSoon from '@/components/coming-soon/ComingSoon'
import React from 'react'

import Title from '@/components/title/Title'

const page = () => {
    const tyresöWpId = 210
    const title = "Tumba"

    return (
        <div>
            <ComingSoon title={title} />
        </div>
    )
}

export default page