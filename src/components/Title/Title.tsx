import React from 'react';
import './Title.scss';
type TitleProps = {
    title: string | null;
};

const Title = ({ title }: TitleProps) => {
    return (
        <div className="Title">{title}</div>
    );
};

export default Title;
