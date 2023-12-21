import React from 'react'
import './HeroText.scss';

import { dm_sans_bold } from '@/styles/fonts';
import { dm_sans_thin } from '@/styles/fonts';


interface Props {
        title: string;
        tagline: string;
        subtitle: string;
}

const HeroText = async ({ title, subtitle, tagline }: Props) => {

    return (
        <div className={`HeroText`} >
            <h1 className={`HeroText__Title ${dm_sans_bold.className}`}>{title}</h1>
            <p className={`HeroText__Paragraph  ${dm_sans_thin.className}`}>{tagline}</p>
            <h2 className={`HeroText__Subtitle  ${dm_sans_bold.className}`}>{subtitle}</h2>
        </div>
    );
};

export default HeroText;