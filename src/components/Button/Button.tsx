'use client'

import React from 'react'
import './Button.scss'


interface Props {
    onClick?: () => void;
}


const Button = ({ onClick }: Props) => {

    return (
        <button className="Button">Boka konsultation</button>
    )
}

export default Button