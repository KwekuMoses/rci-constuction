import React from 'react'
import Title from '../Title/Title'

import './Introduction.scss';

interface Props {
    introductionData: {
        title: string | null;
        text: string | null;
    }
}

const Introduction = ({ introductionData }: Props) => {
    const { title, text } = introductionData

    return (
        <div className="Introduction">
            <div className="Introduction__Title">
                <Title title={title}></Title>
            </div>
            <div className="Introduction__Description">{text}</div>
        </div>
    )
}

export default Introduction