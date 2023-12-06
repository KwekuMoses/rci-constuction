import React from 'react'

interface Props {
    logoData: {
        image_1: string | null;
        image_2: string | null;
        image_3: string | null;
    };
}

const CustomMarquee = ({ logoData }: Props) => {
    const { image_1, image_2, image_3 } = logoData

    return (
        <div>CustomMarquee</div>
    )
}

export default CustomMarquee