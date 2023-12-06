import React from 'react'

import './Introduction.scss';

interface Props {
    introductionData: {
        title: string | null;
        text: string | null;
    }
}

const TaglineSection = ({ introductionData }: Props) => {
    const { title, text } = introductionData

    return (
        <div className="TaglineSection">
            <h2 className="TaglineSection__Title">{title}</h2>
            <div className="TaglineSection__Description">{text}</div>
        </div>
    )
}

export default TaglineSection