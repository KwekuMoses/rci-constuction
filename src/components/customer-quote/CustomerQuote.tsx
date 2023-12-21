import React from 'react'
import Image from 'next/image'
import Title from '../title/Title'

import './CustomerQuote.scss'


interface Props {
    socialProofData: {
        image: {
            sourceUrl: string;
        } 
        quote: string | null;
        company: string | null;
        person: string | null;
    }
}

const CustomerQuoteSection = ({ socialProofData }: Props) => {

    const { image, quote, company, person } = socialProofData

    return (
        <div className="CustomerQuote">
            <div className="CustomerQuote__TitleWrapper">
                <Title title="Vad våra kunder säger" />
            </div>
            <div className="CustomerQuote__ImageWrapper">
                {image && (
                    <Image className='CustomerQuote__Image' src={image.sourceUrl} alt="Customer Image" layout='fill' objectFit='contain' />
                )}

            </div>
            <div className="CustomerQuote__Quote">{quote}</div>
            <div className="CustomerQuote__Company">{company}</div>
            <div className="CustomerQuote__Person">{person}</div>
        </div>

    )
}

export default CustomerQuoteSection