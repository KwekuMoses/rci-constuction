import React from 'react'
import './ServiceQuote.scss'

interface Props {
    quote: string
}

const ServiceQuote = ({ quote }: Props) => {

    return (
        <span className="ServiceQuote">{quote}</span>
    )
}

export default ServiceQuote