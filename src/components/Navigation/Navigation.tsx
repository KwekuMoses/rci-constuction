'use client';
import React from 'react';

import MobileNavigation from '../../../MobileNavigation';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import './Navigation.scss';

interface Props {
    isMobile: boolean;
}

const Navigation = ({ isMobile }: Props) => {

    return (
        <div className="Navigation">
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        </div>
    );
};

export default Navigation;
