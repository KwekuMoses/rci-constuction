import React from 'react'
import Title from '../Title/Title'
import Link from 'next/link';

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
        <>
            <Title title={title} />
            {cardsArray.map((card: any, index: number) => {
                const { title, text, text_link } = card;
                const linkUrl = title?.toLowerCase();

                return (
                    <div className="ServicesSection__Card" key={index}>
                        <h3 className="ServicesSection__CardTitle">{title}</h3>
                        <div className="ServicesSection__CardText">{text}</div>
                        <Link href={linkUrl}>{text_link}</Link>
                    </div>
                );
            })}
        </>
    );
}

export default ServicesSection;
