'use client';

import React, { useState, useEffect } from 'react'

import Image from 'next/image'

import useFetchPageContent from '@/Hooks/useFetchPageContent';
import useDynamicHeroHeight from '@/Hooks/useDynamicHeroHeight';
import { extractImageUrl } from '@/utils/extractImageUrl';

import './Hero.scss';

import HeroText from './HeroText/HeroText';


const Hero = () => {
    const homePageId = 11
    const { pageContent, isLoading } = useFetchPageContent(homePageId);
    const imageUrl = pageContent ? extractImageUrl(pageContent.content.rendered) : null;
    const heroHeight = useDynamicHeroHeight('#Header');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Hero" style={{ height: heroHeight }}>
            <HeroText pageContent={pageContent} />
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="Hero Image"
                    layout='fill'
                    objectFit='cover'
                />
            )}
            <div className="Hero__Overlay"></div>
        </div >
    )
}

export default Hero
