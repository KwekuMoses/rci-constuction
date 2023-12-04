import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const Header = () => {


    return (
        <div className="Header" id="Header">
            <div className="Header__Column"><Logo /></div>
            <div className="Header__Column"><Navigation /></div>
            <div className="Header__Column"><Button /></div>
        </div>
    );
};

export default Header;
