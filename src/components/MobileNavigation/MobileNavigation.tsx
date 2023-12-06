import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './MobileNavigation.scss';
import CtaButton from '../CtaButton/CtaButton';

interface Props {
    isMobile: boolean;
}

const MobileNavigation = ({ isMobile }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

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
                {/* <NavigationLinks isMobile={isMobile} /> */}
                <div className="MobileNavigation__CtaButton">
                    <CtaButton />
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
