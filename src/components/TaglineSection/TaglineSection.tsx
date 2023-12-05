"use client";

import React from 'react'
import useFetchPageContent from '@/Hooks/useFetchPageContent';
import { parseHtmlContent } from '@/utils/extractTextContent';

import './TaglineSection.scss';

const TaglineSection = () => {
    const { pagesData, isLoading } = useFetchPageContent(11)

    if (isLoading || !pagesData) {
        return <div>Loading...</div>;
    }

    const pagesContent = Array.isArray(pagesData) ? pagesData[0] : pagesData;

    const { h3Content } = parseHtmlContent(pagesContent.content.rendered);

    return (
        <div className="TaglineSection">
            <h2 className="TaglineSection__Title">{h3Content}</h2>
            <div className="TaglineSection__Description">TaglineSection</div>
        </div>
    )
}

export default TaglineSection