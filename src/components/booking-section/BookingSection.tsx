import React from 'react';
import Title from '../Title/Title';
import Button from '../cta-button/CtaButton';
import BookingCardSection from '../bookingcard-section/BookingCardSection';

import './BookingSection.scss';

interface Props {
    bookingData: {
        title: string | null;
        text: string;
        card_1: { icon: boolean; title?: string; text: string };
        card_2: { icon: boolean; title?: string; text: string };
        card_3: { icon: boolean; title?: string; text: string };
    }
}

const BookingSection = ({ bookingData }: Props) => {
    const { title, card_1, card_2, card_3 } = bookingData;
    const cardsArray = [card_1, card_2, card_3];

    return (
        <div className="BookingSection">
            <div className="BookingSection__TitleWrapper"> <Title title={title} /> </div>
            <div className="BookingSection__CardWrapper">
                {cardsArray.map((card, index) => {
                    const { title: cardTitle, text: cardText, icon: cardIcon } = card;
                    return (
                        <BookingCardSection
                            key={index}
                            title={cardTitle || "RCI BYGG"} // Providing a default title
                            text={cardText}
                            icon={cardIcon}
                        />
                    );
                })}
            </div>
            <Button width="medium" />
        </div>
    );
}

export default BookingSection;
