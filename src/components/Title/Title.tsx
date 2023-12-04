import React from 'react';

type TitleProps = {
    title: string;
};

const Title = ({ title }: TitleProps) => {
    return (
        <div>{title}</div>
    );
};

export default Title;
