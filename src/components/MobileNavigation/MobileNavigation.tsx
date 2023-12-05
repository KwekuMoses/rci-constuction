import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './MobileNavigation.scss';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function for the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // React Spring animation for menu panel
    const menuAnimation = useSpring({
        transform: isOpen ? `translateX(0)` : `translateX(-100%)`,
    });

    return (
        <div className="MobileNavigation">
            <div className="MobileNavigation__Burger" onClick={toggleMenu}>
                Burger
            </div>
            <animated.div style={menuAnimation} className="MobileNavigation__MobileMenu">
                <NavigationLinks />
            </animated.div>
        </div>
    );
};

export default MobileNavigation;
