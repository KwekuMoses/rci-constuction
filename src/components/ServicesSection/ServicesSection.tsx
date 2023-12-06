import React from 'react'
import Title from '../Title/Title'
import Link from 'next/link';

import Image from 'next/image'

import './ServicesSection.scss'

interface Props {
    servicesData: {
        title: string | null;
        cards: {
            image: string | null;
            map: Function;
        }
    }
}

const ServicesSection = ({ servicesData }: Props) => {
    const { title, cards } = servicesData
    const cardsArray = Object.values(cards);


    return (
        <div className="Services">
            <div className="Services__Title">
                <Title title={title} />
            </div>
            {cardsArray.map((card: any, index: number) => {
                const { title, text, text_link, image } = card;

                const linkUrl = title?.toLowerCase();


                function capitalizeFirstLetter(string: string) {
                    if (!string) return '';
                    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
                }

                const text_link_formatted = capitalizeFirstLetter(text_link);

                return (
                    <div className="Services__Card" key={index}>
                        <div className="Services__CardImageWrapper">
                            <Image src={image} alt={title} layout="fill" quality={100} objectFit="cover" loading="lazy" />
                        </div>
                        <h3 className="Services__CardTitle">{title}</h3>
                        <div className="Services__CardText">{text}</div>
                        <Link className="Services__CardLink" href={linkUrl}>{text_link_formatted}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ServicesSection;
