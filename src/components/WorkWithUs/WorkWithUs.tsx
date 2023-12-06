import React from 'react'

interface Props {
    careerData: {
        title: string | null;
        text: string | null;
        read_more: string | null;
    };
}

const WorkWithUs = ({ careerData }: Props) => {
    const { title, text, read_more } = careerData

    return (
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href="/">{read_more}</a>
        </div>
    )
}

export default WorkWithUs