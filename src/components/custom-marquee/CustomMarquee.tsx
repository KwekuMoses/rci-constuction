import React from 'react';
import './CustomMarquee.scss';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Title from '../title/Title';


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
            <Title title="Vi sammarbetar med" />
            <div className="Marquee__Content">
                <Marquee>
                    {image_1 &&
                        <div className="Marquee__ImageContainer Marquee__ImageContainer--first">
                            <Image
                                src={image_1}
                                alt="Logo 1"
                                layout="responsive"
                                width={390}
                                height={127}
                                priority={true} />
                        </div>}
                    {image_2 &&
                        <div className="Marquee__ImageContainer Marquee__ImageContainer--second">
                            <Image
                                src={image_2}
                                alt="Logo 2"
                                layout="responsive"
                                width={524}
                                height={96}
                                priority={true} />
                        </div>}
                    {image_3 &&
                        <div className="Marquee__ImageContainer">
                            <Image
                                src={image_3}
                                alt="Logo 3"
                                layout="responsive"
                                width={368}
                                height={469}
                                priority={true} /></div>}
                </Marquee>
            </div>
        </div>

    );
}

export default CustomMarquee;
