import React from 'react';
import './DesktopMarquee.scss';
import Image from 'next/image';
import Title from '../Title/Title';

interface Props {
    logoData: {
        image_1: string | null;
        image_2: string | null;
        image_3: string | null;
    };
}

const DesktopMarquee = ({ logoData }: Props) => {

    const { image_1, image_2, image_3 } = logoData;

    return (
        <div className="DesktopMarquee">
            <Title title="Vi sammarbetar med" />
            <div className="DesktopMarquee__Content">
                {image_1 && <div className="DesktopMarquee__ImageContainer DesktopMarquee__ImageContainer--first"><Image src={image_1} alt="Logo 1" layout="responsive" width={100} height={50} priority={true} /></div>}
                {image_2 && <div className="DesktopMarquee__ImageContainer DesktopMarquee__ImageContainer--second"><Image src={image_2} alt="Logo 2" layout="responsive" width={100} height={50} priority={true} /></div>}
                {image_3 && <div className="DesktopMarquee__ImageContainer"><Image src={image_3} alt="Logo 3" layout="responsive" width={100} height={50} priority={true} /></div>}
            </div>
        </div>

    );
}

export default DesktopMarquee;
