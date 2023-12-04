import React from 'react'
import Title from '../Title/Title'
import Button from '../Button/Button'
import BookingCardSection from '../BookingCardSection/BookingCardSection'

const BookingSection = () => {
    return (
        <>
            <Title title="Booking" />
            <div>BookingSection</div>
            <BookingCardSection />
            <Button />
        </>
    )
}

export default BookingSection