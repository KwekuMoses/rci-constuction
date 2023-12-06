import React from 'react';
import './CustomMarquee.scss';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

interface Props {
    logoData: {
        image_1: string | null;
        image_2: string | null;
        image_3: string | null;
    };
}

const CustomMarquee = ({ logoData }: Props) => {
    const { image_1, image_2, image_3 } = logoData;

    return (
        <div className="Marquee">
            <div className="Marquee__Content">
                <Marquee>
                    {image_1 && <div className="Marquee__ImageContainer--first"><Image src={image_1} alt="Logo 1" layout="responsive" width={100} height={50} /></div>} {/* Adjust width and height as needed */}
                    {image_2 && <div className="Marquee__ImageContainer--second"><Image src={image_2} alt="Logo 2" layout="responsive" width={100} height={50} /></div>}
                    {image_3 && <div className="Marquee__ImageContainer"><Image src={image_3} alt="Logo 3" layout="responsive" width={100} height={50} /></div>}
                </Marquee>
            </div>
        </div>

    );
}

export default CustomMarquee;
