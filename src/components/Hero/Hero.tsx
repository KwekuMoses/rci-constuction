'use client';

import React from 'react'

import Image from 'next/image'

import HeroText from './HeroText/HeroText';

import { poppins } from '../../Styles/fonts';

import './Hero.scss';

import useFetchPageContent from '@/Hooks/useFetchPageContent';
import useDynamicHeroHeight from '@/Hooks/useDynamicHeroHeight';
import { extractImageUrl } from '@/utils/extractImageUrl';

const Hero = () => {
    const homePageId = 11
    const { pagesData, isLoading } = useFetchPageContent(homePageId);
    const { heroHeight, headerHeight } = useDynamicHeroHeight('#Header');
    if (isLoading || !pagesData) {
        return <div>Loading...</div>;
    }

    const pageContent = Array.isArray(pagesData) ? pagesData[0] : pagesData;
    const imageUrl = pageContent ? extractImageUrl(pageContent.content.rendered) : null;

    return (
        <div className={`Hero ${poppins.className}`} style={{ height: heroHeight }}>
            {pagesData && <HeroText pagesData={pageContent} />}
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
