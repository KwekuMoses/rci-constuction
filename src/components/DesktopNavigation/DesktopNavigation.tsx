import React from 'react'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

interface Props {
    servicesData: {};
    navigationData: {};
}

const DesktopNavigation = ({ servicesData, navigationData }: Props) => {
    let isMobile = false
    return (
        <>
            <NavigationLinks isMobile={isMobile} navigationData={navigationData} servicesData={servicesData} />
        </>
    )
}

export default DesktopNavigation