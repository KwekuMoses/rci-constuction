import React from 'react'
import './SecondaryButton.scss'
interface Props {
    buttonData: string;
}

const SecondaryButton = ({ buttonData }: Props) => {
    const text = buttonData
    return (
        <div className="SecondaryButton">{text}</div>
    )
}

export default SecondaryButton