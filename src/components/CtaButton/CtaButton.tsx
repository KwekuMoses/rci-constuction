import React from 'react'
import './CtaButton.scss'
import { dm_sans_buttons } from '../../Styles/fonts';

import Link from 'next/link'

interface Props {
    onClick?: () => void;
    link: string;
    width: string | undefined;
}

const CtaButton = ({ onClick, link, width }: Props) => {


    return (
        <Link href={`${link}`} className={`Button ${dm_sans_buttons.className} ${width === "full" ? "full-width" : ""}`}>Boka konsultation</Link>
    )
}

export default CtaButton