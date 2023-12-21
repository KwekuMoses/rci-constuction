'use client';
import React, { useState, useEffect } from 'react';
import './Header.scss';
import Navigation from '../navigation/Navigation';
import Button from '../cta-button/CtaButton';
import Logo from '../logo/Logo';

import useMakeHeaderSticky from '@/utils/stickyHeader';

interface Props {
    servicesData: {};
    navigationData: {};
}

const Header = ({ servicesData, navigationData }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    useMakeHeaderSticky("Header", -70, isOpen);

    let isMobile = true;

    return (
        <div className="Header" id="Header">
            <div className="Header__Column Logo">
                <Logo />
            </div>
            <div className="Header__Column Header__Nav">
                <Navigation isMobile={isMobile} servicesData={servicesData} navigationData={navigationData} setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            <div className="Header__Column">
                {/* <Button /> */}
            </div>
        </div>
    );
};

export default Header;
