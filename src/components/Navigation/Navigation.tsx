'use client';
import React from 'react';

import MobileNavigation from '../MobileNavigation/MobileNavigation';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import './Navigation.scss';

interface Props {
    isMobile: boolean;
}

const Navigation = ({ isMobile }: Props) => {

    return (
        <div className="Navigation">
            {isMobile ? <MobileNavigation isMobile={isMobile} /> : <DesktopNavigation isMobile={isMobile} />}
        </div>
    );
};

export default Navigation;
