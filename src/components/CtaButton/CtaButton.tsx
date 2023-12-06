'use client'
import React from 'react'
import './CtaButton.scss'
import { dm_sans_buttons } from '../../Styles/fonts';

import Link from 'next/link'

interface Props {
    onClick?: () => void;
    text: string;
    link: string;
}

const CtaButton = ({ onClick, text, link }: Props) => {

    return (
        <Link href="/" className={`Button ${dm_sans_buttons.className}`}>Boka konsultation</Link>
    )
}

export default CtaButton