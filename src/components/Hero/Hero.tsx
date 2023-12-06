import React from 'react'

import Image from 'next/image'

import HeroText from './HeroText/HeroText';

import { poppins } from '../../Styles/fonts';

import './Hero.scss';

// import useFetchPageContent from '@/Hooks/useFetchPageContent';
import useDynamicHeroHeight from '@/Hooks/useDynamicHeroHeight';
import { extractImageUrl } from '@/utils/extractImageUrl';

interface Props {
    heroData: {
        imageUrl: string | null;
        title: string;
        tagline: string;
        subtitle: string;

    }
}

const Hero = ({ heroData }: Props) => {
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
                    layout='fill'
                    objectFit='cover'
                />
            )}
            <div className={`Hero__Overlay`}></div>
        </div >
    )
}

export default Hero
