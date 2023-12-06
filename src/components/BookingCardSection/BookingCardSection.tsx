import React from 'react'
import BookingCard from '../BookingCard/BookingCard'

interface BookingCardProps {
    title?: string | null;
    text: string;
    icon: boolean;
}

const BookingCardSection = ({ title, text, icon }: BookingCardProps) => {
    return (
        <>
            <BookingCard title={title} text={text} icon={icon} />
            {/* Add more <BookingCard /> if needed with different props */}
        </>
    );
}

export default BookingCardSection;
