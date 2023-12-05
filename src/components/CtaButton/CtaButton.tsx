'use client'

import React from 'react'
import './CtaButton.scss'

interface Props {
    onClick?: () => void;
}

const CtaButton = ({ onClick }: Props) => {

    return (
        <button className="Button">Boka konsultation</button>
    )
}

export default CtaButton