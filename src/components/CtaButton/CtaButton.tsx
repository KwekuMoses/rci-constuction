import React from 'react'
import './CtaButton.scss'
import { dm_sans_buttons } from '../../Styles/fonts';

import Link from 'next/link'

interface Props {
    link: string;
    width: string;
}

const CtaButton = ({ link, width }: Props) => {

    return (
        <Link href={`${link}`} className={`Button ${dm_sans_buttons.className} ${width === "full" ? "full-width" : ""}`}>Boka konsultation</Link>
    )
}

export default CtaButton