import ProjectPage from '@/components/ProjectPage/ProjectPage'
import React from 'react'



const page = () => {
    const tyresöWpId = 210
    const title = "Tyresö"

    return (
        <>
            <ProjectPage id={tyresöWpId} title={title} />
        </>
    )
}

export default page