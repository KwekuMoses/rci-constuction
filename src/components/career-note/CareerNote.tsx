import React from 'react'
import './CareerNote.scss'

import Title from '../title/Title'

interface Props {
    careerData: {
        title: string | null;
        text: string | null;
        readMore: string | null;
    };
}

const CareerNote = ({ careerData }: Props) => {
    const { title, text, readMore } = careerData

    return (
        <>
            <Title title="Vill du jobba hos oss?" />
            <div className="CareerNote">
            <p className="CareerNote__Text">{text}</p>
                <a className="CareerNote__Link" href="/karriar">{readMore}</a>
            </div>
        </>
    )
}

export default CareerNote