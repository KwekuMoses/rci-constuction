import React from 'react';
import Link from 'next/link';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import GoogleTracker from '../GoogleTracker/GoogleTracker';

interface Props {
    servicesData: {
        id: number;
        title: { rendered: string };
        slug: string;
    }[];
}

const Footer = ({ servicesData }: Props) => {
    return (
        <div className='Footer'>
            <div className="Footer__Services">
                {servicesData.map(service => (
                    <div className="Footer__ServiceLink" key={service.id}>
                        <Link href={`/tjanster/${service.slug}`}>
                            {service.title.rendered}
                        </Link>
                    </div>
                ))}
                <span className="Footer__Divider"></span>
            </div>
            <div className="Footer__Social">
                <div className="Footer__Icon">
                    <a href="https://www.facebook.com/RCIBYGG/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                <div className='Footer__Icon'>
                    <a href="https://www.instagram.com/rci.bygg.ab/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className="Footer__Copyright">
                Copyright © 2023 All Rights Reserved
            </div>
            <div className="Footer__Privacy">
                <Link href="/integritetspolicy">Integritetspolicy</Link>
            </div>
            <GoogleTracker />
        </div>
    );
}

export default Footer;
