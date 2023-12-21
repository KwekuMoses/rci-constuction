import React from 'react'
import Title from '../title/Title'
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
        <div className="ServiceSection" id="tjanster">
            <div className="ServiceSection__Title">
                <Title title={title} />
            </div>
            {cardsArray.map((card: any, index: number) => {
                const { title, text, text_link, image } = card;

                function replaceSwedishChars(string: string) {
                    return string.replace(/å/gi, 'a')
                        .replace(/ä/gi, 'a')
                        .replace(/ö/gi, 'o');
                }

                const linkUrl = replaceSwedishChars(title?.toLowerCase() ?? "");


                function capitalizeFirstLetter(string: string) {
                    if (!string) return '';
                    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
                }

                const text_link_formatted = capitalizeFirstLetter(text_link);

                return (
                    <div className="ServiceSection__Card" key={index}>
                        <div className="ServiceSection__CardImageWrapper">
                            <Image src={image.sourceUrl} alt={title} layout="fill" quality={100} objectFit="cover" loading="lazy" />
                        </div>
                        <h3 className="ServiceSection__CardTitle">{title}</h3>
                        <div className="ServiceSection__CardText">{text}</div>
                        <Link className="ServiceSection__CardLink" href={`tjanster/${linkUrl}`}>{text_link_formatted}</Link>
                    </div>
                );
            })}
        </div>
    );
}

export default ServicesSection;
