import React from 'react'
import './HeroText.scss';

import { parseHtmlContent } from '@/utils/extractTextContent';


interface HeroTextProps {
    pageContent: {
        content: {
            rendered: string;
        };
        excerpt: {
            rendered: string;
        };

    };
}

const HeroText: React.FC<HeroTextProps> = ({ pageContent }) => {
    const { h1Content, pContent, h2Content } = parseHtmlContent(pageContent.content.rendered);




    return (
        <div className="HeroText">
            <h1 className="HeroText__Title">{h1Content}</h1>
            <p className="HeroText__Paragraph">{pContent}</p>
            <h2 className="HeroText__Subtitle">{h2Content}</h2>
        </div>
    );
};

export default HeroText;