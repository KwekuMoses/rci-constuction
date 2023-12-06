import React from 'react'

interface Props {
    title: string | null;
}

const BookingCard = ({ title }: Props) => {
    return (
        <div>{title}</div>
    )
}

export default BookingCard