import React from 'react';
import Title from '../title/Title';
import Button from '../cta-button/CtaButton';
import BookingCardSection from '../bookingcard-section/BookingCardSection';

import './BookingSection.scss';

interface Props {
    bookingData: {
        title: string | null;
        text: string;
        card1: { icon: boolean; title?: string; text: string };
        card2: { icon: boolean; title?: string; text: string };
        card3: { icon: boolean; title?: string; text: string };
    }
}

const BookingSection = ({ bookingData }: Props) => {
    const { title, card1, card2, card3 } = bookingData;
    const cardsArray = [card1, card2, card3];

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
