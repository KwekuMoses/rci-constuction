import React from 'react'
import Image from 'next/image'
import './ServiceHero.scss'

interface Props {
    heroUrl: string
    intro: {
        service_title: string
        text: string
        button_text: string
    }
}

const ServiceHero = ({ heroUrl, intro }: Props) => {
    return (
        <div className="ServiceHero">
            <div className="ServiceHero__TextWrapper">
                <h1 className="ServiceHero__Title">{intro.service_title}</h1>
                <p className="ServiceHero__Text">{intro.text}</p>
                <span className="line"></span>

            </div>
            <Image
                className="ServiceHero__Image"
                src={heroUrl}
                alt="Hero Image"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} />
            <div className={"ServiceHero__Overlay"}></div>
        </div>
    )
}

export default ServiceHero