import React from 'react'
import NavigationLinks from '../navigation-links/NavigationLinks'

interface NavigationItem {
    title: string;
    slug: string;
    menuOrder: number;
}
interface Props {
    servicesData: {};
    navigationData: NavigationItem[]; 
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