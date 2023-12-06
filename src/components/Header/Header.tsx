'use client';
import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Button from '../CtaButton/CtaButton';
import Logo from '../Logo/Logo';

import { useWindowSize } from '@/Hooks/useWindowSize';
import { isMobileScreen } from '@/utils/handleResponsive';

const Header = () => {
    const { width } = useWindowSize();
    const isMobile = isMobileScreen(width ?? 0);

    return (
        <div className="Header" id="Header">
            <div className="Header__Column Logo"><Logo /></div>
            <div className="Header__Column"><Navigation isMobile={isMobile} /></div>
            {!isMobile && <div className="Header__Column">
                {/* <Button /> */}
            </div>}
        </div>
    );
};

export default Header;
