import React from 'react'

import { fetchProjectsData } from '@/api/wordpress/api'
import Title from '../title/Title';
import Image from 'next/image'

import './ProjectPage.scss'

interface Props {
    id: number
    title: string
}


const ProjectPage = async ({ id, title }: Props) => {
    const projectsData = await fetchProjectsData(id)

    const { project_description } = projectsData.acf.projects
    const gallery = (projectsData.acf.projects.gallery)

    const { image_1, image_2, image_3, image_4, image_5, image_6 } = gallery

    return (
        <main className="ProjectPage">
            <div className="ProjectPage__Title">
                <Title title={title} />
            </div>  
            <p className="ProjectPage__Description">{project_description}</p>
            <div className="ProjectPage__Container">
                <div className="ProjectPage__Column ProjectPage__Column--left">
                    {image_1 && image(image_1, "image-1")}
                    {image_2 && image(image_2, "image-2")}
                    {image_3 && image(image_3, "image-3")}
                </div>
                <div className="ProjectPage__Column ProjectPage__Column--right">
                    {image_4 && image(image_4, "image-4")}
                    {image_5 && image(image_5, "image-5")}
                    {image_6 && image(image_6, "image-6")}
                </div>
            </div>
        </main>
    )
}

export default ProjectPage

const image = (image: string, alt: string) => {
    return (
        <div className="ProjectPage__Image">
            <Image
                src={image}
                alt={alt}
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} />
        </div>
    )

}