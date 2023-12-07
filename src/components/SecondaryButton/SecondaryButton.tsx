import React from 'react'
import Link from 'next/link'
import './SecondaryButton.scss'
interface Props {
    buttonData: string;
}

const SecondaryButton = ({ buttonData }: Props) => {
    const text = buttonData
    return (
        <Link href="/projekt" className="SecondaryButton">{text}</Link>
    )
}

export default SecondaryButton