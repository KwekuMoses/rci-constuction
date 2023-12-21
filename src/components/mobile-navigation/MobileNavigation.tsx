"use client"
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavigationLinks from '../navigation-links/NavigationLinks';
import './MobileNavigation.scss';
import CtaButton from '../cta-button/CtaButton';

interface Props {
    isMobile: boolean;
    servicesData: {};
    navigationData: {};
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation = ({ isMobile, servicesData, navigationData, isOpen, setIsOpen }: Props) => {

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="MobileNavigation">
            <div className={`MobileNavigation__Burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="BurgerLine"></div>
                <div className="BurgerLine"></div>
                <div className="BurgerLine"></div>
            </div>
            <div className={`MobileNavigation__MobileMenu ${isOpen ? 'open' : ''}`}>
                <NavigationLinks setIsOpen={setIsOpen} isMobile={isMobile} servicesData={servicesData} navigationData={navigationData} />
                <div className="MobileNavigation__CtaButton">
                    <CtaButton width="full" />
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
