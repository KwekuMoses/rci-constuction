// 'use client';
import React from 'react';

import MobileNavigation from '../mobile-navigation/MobileNavigation';
import DesktopNavigation from '../desktop-navigation/DesktopNavigation';
import './Navigation.scss';

// import { useNavigationData } from '@/Contexts/NavigationDataContext';

// import { fetchServiceData, fetchNavigationData } from '@/utils/fetchData'
interface NavigationItem {
    title: string;
    slug: string;
    menuOrder: number;
}

interface Props {
    isMobile: boolean;
    servicesData: {};
    navigationData: NavigationItem[];
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Navigation = ({ isMobile, servicesData, navigationData, setIsOpen, isOpen }: Props) => {
    return (
        <div className="Navigation">
            <div className="Navigation__Mobile">
                <MobileNavigation isMobile={isMobile} servicesData={servicesData} navigationData={navigationData} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="Navigation__Desktop">
                <DesktopNavigation setIsOpen={setIsOpen} servicesData={servicesData} navigationData={navigationData} />
            </div>

        </div>
    );
};

export default Navigation;
