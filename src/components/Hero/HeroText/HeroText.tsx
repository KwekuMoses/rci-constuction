import React from 'react'
import './HeroText.scss';

import { parseHtmlContent } from '@/Utils/extractTextContent';

interface HeroTextProps {
    pagesData: {
        content: {
            rendered: string;
        };


    };
}

const HeroText: React.FC<HeroTextProps> = ({ pagesData }) => {
    console.log(pagesData.content)
    const { h1Content, pContent, h2Content } = parseHtmlContent(pagesData.content.rendered);

    return (
        <div className="HeroText">
            <h1 className="HeroText__Title">{h1Content}</h1>
            <p className="HeroText__Paragraph">{pContent}</p>
            <h2 className="HeroText__Subtitle">{h2Content}</h2>
        </div>
    );
};

export default HeroText;