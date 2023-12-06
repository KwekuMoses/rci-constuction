'use client';
import React, { useEffect } from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Button from '../CtaButton/CtaButton';
import Logo from '../Logo/Logo';

import { useWindowSize } from '@/Hooks/useWindowSize';
import { isMobileScreen } from '@/utils/handleResponsive';

const Header = () => {
    const { width } = useWindowSize();
    const isMobile = isMobileScreen(width ?? 0);

    useEffect(() => {
        let lastScrollTop = 0;
        const onScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                document.getElementById("Header").style.top = "-70px";
            } else {
                document.getElementById("Header").style.top = "0";
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
