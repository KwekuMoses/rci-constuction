import React from 'react'
import './ComingSoon.scss'
import Title from '../title/Title';

interface Props {
    title: string;
}

const ComingSoon = ({ title }: Props) => {
    return (
        <>
            <div className="ComingSoon">Mer info om <b>{title}</b> kommer snart!</div>
        </>
    )
}

export default ComingSoon