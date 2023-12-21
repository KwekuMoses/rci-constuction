import React from 'react'

import Image from 'next/image'

import HeroText from './HeroText/HeroText';

import { poppins } from '../../styles/fonts';

import './Hero.scss';

interface Props {
    heroData: {
        imageUrl: string | null;
        title: string;
        tagline: string;
        subtitle: string;

    }
    heroData_: {

    }
}

const Hero = ({ heroData, heroData_ }: Props) => {
    const { imageUrl } = heroData
    return (
        <div className={`Hero ${poppins.className}`}>
            <div className="Hero__TextWrapper">
                <HeroText heroData={heroData} />
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
