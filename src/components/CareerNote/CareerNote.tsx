import React from 'react'
import './CareerNote.scss'

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
        <div className="CareerNote">
            <h2 className="CareerNote__Title">{title}</h2>
            <p className="CareerNote__Text">{text}</p>
            <a className="CareerNote__Link" href="/">{read_more}</a>
        </div>
    )
}

export default CareerNote