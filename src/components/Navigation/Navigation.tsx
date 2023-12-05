'use client';
import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItem';

import { useWindowSize } from '@/Hooks/useWindowSize';
import { isMobileScreen } from '@/Utils/handleResponsive';

import MobileNavigation from './MobileNavigation/MobileNavigation';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import './Navigation.scss';


const Navigation = () => {
    const { width } = useWindowSize();
    const isMobile = isMobileScreen(width);

    return (
        <div className="Navigation">
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        </div>
    );
};

export default Navigation;
