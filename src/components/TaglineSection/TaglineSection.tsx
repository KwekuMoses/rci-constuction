"use client";

import React from 'react'
import useFetchPageContent from '@/Hooks/useFetchPageContent';
import { parseHtmlContent, extractParagraphById } from '@/utils/extractTextContent';

import './TaglineSection.scss';

const TaglineSection = () => {
    const { pagesData, isLoading } = useFetchPageContent(11)

    if (isLoading || !pagesData) {
        return <div>Loading...</div>;
    }

    const pagesContent = Array.isArray(pagesData) ? pagesData[0] : pagesData;

    const { h3Content, pDescriptionHome } = parseHtmlContent(pagesContent.content.rendered);
    const paragraphText = extractParagraphById(pagesContent.content.rendered, "description-home");
    return (
        <div className="TaglineSection">
            <h2 className="TaglineSection__Title">{h3Content}</h2>
            <div className="TaglineSection__Description">{paragraphText}</div>
        </div>
    )
}

export default TaglineSection