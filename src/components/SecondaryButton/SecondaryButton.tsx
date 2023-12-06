import React from 'react'

interface Props {
    buttonData: string;
}

const SecondaryButton = ({ buttonData }: Props) => {
    const text = buttonData
    return (
        <div>{text}</div>
    )
}

export default SecondaryButton