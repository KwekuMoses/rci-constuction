import React from 'react'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

interface Props {
    servicesData: {};
    navigationData: {};
    setIsOpen: (isOpen: boolean) => void;
}

const DesktopNavigation = ({ servicesData, navigationData, setIsOpen }: Props) => {
    let isMobile = false
    return (
        <>
            <NavigationLinks setIsOpen={setIsOpen} isMobile={isMobile} navigationData={navigationData} servicesData={servicesData} />
        </>
    )
}

export default DesktopNavigation