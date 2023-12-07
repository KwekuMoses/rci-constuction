import React from 'react'
import ServiceHero from "@/components/ServiceHero/ServiceHero";

import { fetchProjectsData } from '@/utils/fetchData'

interface Props {
    id: number
}


const ProjectPage = async ({ id }: Props) => {
    // const servicesData = await fetchProjectsData(id)
    // const acfData = servicesData.acf.service
    // const { hero, intro, cards, quote_text, showcase, contact } = acfData

    return (
        <div>

        </div>
    )
}

export default ProjectPage