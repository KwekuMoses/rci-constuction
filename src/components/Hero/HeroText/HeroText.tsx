import React from 'react'
import './HeroText.scss';

import { parseHtmlContent } from '@/utils/extractTextContent';

import { dm_sans_bold } from '@/Styles/fonts';
import { dm_sans_thin } from '@/Styles/fonts';

interface HeroTextProps {
    pagesData: {
        content: {
            rendered: string;
        };


    };
}

const HeroText = ({ pagesData }: HeroTextProps) => {
    const { h1Content, pContent, h2Content } = parseHtmlContent(pagesData.content.rendered);

    return (
        <div className={`HeroText `} >
            <h1 className={`HeroText__Title ${dm_sans_bold.className}`}>{h1Content}</h1>
            <p className={`HeroText__Paragraph  ${dm_sans_thin.className}`}>{pContent}</p>
            <h2 className={`HeroText__Subtitle  ${dm_sans_bold.className}`}>{h2Content}</h2>
        </div>
    );
};

export default HeroText;