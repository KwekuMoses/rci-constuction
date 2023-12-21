import React from 'react';
import './CustomMarquee.scss';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Title from '../title/Title';


interface Props {
    logoData: {
        image1: { sourceUrl: string };
        image2: { sourceUrl: string };
        image3: { sourceUrl: string };
    };
}

const CustomMarquee = ({ logoData }: Props) => {

    const { image1, image2, image3 } = logoData;

    return (
        <div className="Marquee">
            <Title title="Vi sammarbetar med" />
            <div className="Marquee__Content">
                <Marquee>
                    {image1 &&
                        <div className="Marquee__ImageContainer Marquee__ImageContainer--first">
                            <Image
                                src={image1.sourceUrl}
                                alt="Logo 1"
                                layout="responsive"
                                width={390}
                                height={127}
                                priority={true} />
                        </div>}
                    {image2 &&
                        <div className="Marquee__ImageContainer Marquee__ImageContainer--second">
                            <Image
                                src={image2.sourceUrl}
                                alt="Logo 2"
                                layout="responsive"
                                width={524}
                                height={96}
                                priority={true} />
                        </div>}
                    {image3 &&
                        <div className="Marquee__ImageContainer">
                            <Image
                                src={image3.sourceUrl}
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
