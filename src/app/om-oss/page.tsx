import React from 'react'
import Image from 'next/image'
import { fetchPageData } from '@/api/wordpress/api'

import Title from '@/components/title/Title'

import './page.scss'

const Page = async () => {
    const aboutPageData = await fetchPageData(16)
    const title = aboutPageData.acf.about.title
    const description = aboutPageData.acf.about.description
    const { image_1, image_2, image_3, image_4 } = aboutPageData.acf.about

    return (
        <main className="About">
            <Title title={title} />
            <p className="About__Description">{description}</p>
            <div className="About__ImageContainer">
                <div className="About__Row About__Row--First">
                    {image_1 && image(image_1)}
                    {image_2 && image(image_2)}
                </div>
                <div className="About__Row About__Row--Second">
                    {image_3 && image(image_3)}
                    {image_4 && image(image_4)}
                </div>
            </div>

        </main>
    )
}

export default Page

const image = (image: string) => {
    return (
        <div className="About__Image">
            <Image src={image} alt="image"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} />
        </div>
    )

}