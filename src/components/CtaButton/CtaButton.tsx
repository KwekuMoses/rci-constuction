'use client'
import React from 'react'
import './CtaButton.scss'
import { dm_sans } from '../../Styles/fonts';

interface Props {
    onClick?: () => void;
}

const CtaButton = ({ onClick }: Props) => {

    return (
        <button className={`Button ${dm_sans.className}`}>Boka konsultation</button>
    )
}

export default CtaButton