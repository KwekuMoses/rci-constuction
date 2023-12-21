import React from 'react'

import Image from 'next/image'

import HeroText from './HeroText/HeroText';

import { poppins } from '../../styles/fonts';

import './Hero.scss';

interface Props {

    heroData: {
        tagline: string;
        subtitle: string;
        title: string;
        imageurl: {
            sourceUrl: string
        }

    }
}

const Hero = ({ heroData }: Props) => {

    const imageUrl = heroData.imageurl.sourceUrl
    const { title, tagline, subtitle } = heroData

    return (
        <div className={`Hero ${poppins.className}`}>
            <div className="Hero__TextWrapper">
                <HeroText title={title} subtitle={subtitle} tagline={tagline} />
            </div>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Hero Image"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    priority={true}
                />
            )}
            <div className={`Hero__Overlay`}></div>
        </div >
    )
}

export default Hero
