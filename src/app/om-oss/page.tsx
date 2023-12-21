import React from 'react'
import Image from 'next/image'
import { fetchAboutPageData } from '@/api/wordpress/api'

import Title from '@/components/title/Title'

import './page.scss'

const Page = async () => {

    const data = await fetchAboutPageData()
    const { title, description, image1, image2, image3, image4 } = data.data.pageBy.about.about

    return (
        <main className="About">
            <Title title={title} />
            <p className="About__Description">{description}</p>
            <div className="About__ImageContainer">
                <div className="About__Row About__Row--First">
                    {image1 && image(image1.sourceUrl)}
                    {image2 && image(image2.sourceUrl)}
                </div>
                <div className="About__Row About__Row--Second">
                    {image3 && image(image3.sourceUrl)}
                    {image4 && image(image4.sourceUrl)}
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