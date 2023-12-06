import React from 'react'
import Image from 'next/image'

import './CustomerQuoteSection.scss'
interface Props {
    socialProofData: {
        image: string | null;
        quote: string | null;
        company: string | null;
        person: string | null;
    }
}

const CustomerQuoteSection = ({ socialProofData }: Props) => {
    const { image, quote, company, person } = socialProofData
    return (
        <>
            <div className="CustomerQuoteSection__Image">
                {image && (
                    <Image src={image} alt="Customer Image" layout='fill' objectFit='cover' />
                )}

            </div>
            <div className="CustomerQuoteSection__Quote">{quote}</div>
            <div className="CustomerQuoteSection__Company">{company}</div>
            <div className="CustomerQuoteSection__Person">{person}</div>
        </>

    )
}

export default CustomerQuoteSection