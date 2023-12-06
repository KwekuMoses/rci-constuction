'use client'
import React from 'react'
import './CtaButton.scss'
import { dm_sans_buttons } from '../../Styles/fonts';

interface Props {
    onClick?: () => void;
    text: string;
}

const CtaButton = ({ onClick, text }: Props) => {

    return (
        <button className={`Button ${dm_sans_buttons.className}`}>Boka konsultation</button>
    )
}

export default CtaButton