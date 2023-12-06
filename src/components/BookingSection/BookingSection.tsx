import React from 'react';
import Title from '../Title/Title';
import Button from '../CtaButton/CtaButton';
import BookingCardSection from '../BookingCardSection/BookingCardSection';

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
        <>
            <Title title={title} />
            <div>BookingSection</div>
            {cardsArray.map((card, index) => {
                const { title: cardTitle, text: cardText, icon: cardIcon } = card;
                return (
                    <BookingCardSection
                        key={index}
                        title={cardTitle || "Default Title"} // Providing a default title
                        text={cardText}
                        icon={cardIcon}
                    />
                );
            })}
            <Button />
        </>
    );
}

export default BookingSection;
