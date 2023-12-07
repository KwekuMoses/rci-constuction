import React from 'react'
import './ServiceShowcase.scss'

import Image from 'next/image'

interface Props {
    showcase: {
        title: string,
        image_1: string,
        image_title_1: string,
        image_text_1: string,
        image_2: string,
        image_title_2: string,
        image_text_2: string,
    }
}

const ServiceShowcase = ({ showcase }: Props) => {

    console.log(showcase)

    const { title, image_1, image_title_1, image_text_1, image_2, image_title_2, image_text_2 } = showcase

    return (
        <div className="ServiceShowcase">
            <div className="ServiceShowcase__Container">
                <div className="ServiceShowcase__Column">
                    {title && <h2 className="ServiceShowCase__Title">{title}</h2>}
                </div>
                <div className="ServiceShowcase__Column">
                    {image_1 && image(image_1)}
                    {image_title_1 && <h3>{image_title_1}</h3>}
                    {image_text_1 && <p>{image_text_1}</p>}
                </div>
                <div className="ServiceShowcase__Column">
                    {image_2 && image(image_2)}
                    {image_title_2 && <h3>{image_title_2}</h3>}
                    {image_text_2 && <p>{image_text_2}</p>}
                </div>
            </div>
        </div>
    )
}

export default ServiceShowcase




const image = (image: string) => {
    return (
        <div className="ServiceShowcase__Image">
            <Image src={image} alt="image"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} />
        </div>
    )

}