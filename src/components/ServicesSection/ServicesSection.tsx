import React from 'react'
import Title from '../Title/Title'
import Link from 'next/link';

import './Services.scss'

interface Props {
    servicesData: {
        title: string | null;
        cards: {
            map: Function;
        }
    }
}

const ServicesSection = ({ servicesData }: Props) => {
    const { title, cards } = servicesData
    const cardsArray = Object.values(cards);



    return (
        <div className="Services">
            <Title title={title} />
            {cardsArray.map((card: any, index: number) => {
                const { title, text, text_link } = card;
                const linkUrl = title?.toLowerCase();

                return (
                    <div className="Services__Card" key={index}>
                        <div>IMAGE</div>
                        <h3 className="Services__CardTitle">{title}</h3>
                        <div className="Services__CardText">{text}</div>
                        <Link href={linkUrl}>{text_link}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ServicesSection;
