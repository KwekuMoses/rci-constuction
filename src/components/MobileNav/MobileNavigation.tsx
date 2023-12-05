import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './MobileNavigation.scss';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuAnimation = useSpring({
        transform: isOpen ? `translateX(0)` : `translateX(-100vh)`,
    });

    return (




        <div className="MobileNavigation">
            <div className={`MobileNavigation__Burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="BurgerLine">
                </div>
                <div className="BurgerLine"></div>
                <div className="BurgerLine"></div>
            </div>
            <animated.div style={menuAnimation} className="MobileNavigation__MobileMenu">
                <NavigationLinks />
            </animated.div>
        </div>
    );
};

export default MobileNavigation;
