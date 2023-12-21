import React from 'react'
import './CareerNote.scss'

import Title from '../title/Title'

interface Props {
    careerData: {
        title: string | null;
        text: string | null;
        read_more: string | null;
    };
}

const CareerNote = ({ careerData }: Props) => {
    const { title, text, read_more } = careerData

    return (
        <>
            <Title title="Vill du jobba hos oss?" />
            <div className="CareerNote">
            <p className="CareerNote__Text">{text}</p>
            <a className="CareerNote__Link" href="/karriar">{read_more}</a>
            </div>
        </>
    )
}

export default CareerNote