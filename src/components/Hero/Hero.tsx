'use client';

import React from 'react'

import Image from 'next/image'

import HeroText from './HeroText/HeroText';

import { poppins } from '@/Styles/fonts';

import './Hero.scss';

import useFetchPageContent from '@/Hooks/useFetchPageContent';
import useDynamicHeroHeight from '@/Hooks/useDynamicHeroHeight';
import { extractImageUrl } from '@/Utils/extractImageUrl';

const Hero = () => {
    const homePageId = 11
    const { pagesData, isLoading } = useFetchPageContent(homePageId);
    const { heroHeight, headerHeight } = useDynamicHeroHeight('#Header');

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const imageUrl = pagesData ? extractImageUrl(pagesData.content.rendered) : null;

    return (
        <div className={`Hero ${poppins.className}`} style={{ height: heroHeight, marginTop: headerHeight }}>
            {pagesData && <HeroText pagesData={pagesData} />}
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
