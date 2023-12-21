import React from 'react'
import BookingCard from '../bookingcard/BookingCard'

interface BookingCardProps {
    title: string | null;
    text: string | null;
    icon: string | boolean;
}

const BookingCardSection = ({ title, text, icon }: BookingCardProps) => {
    return (
        <>
            <BookingCard title={title} text={text} icon={icon} />
        </>
    );
}

export default BookingCardSection;
