import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationLinks.scss';
import { isActiveLink } from '@/utils/routeHelpers';

interface NavigationItem {
    title: string;
    slug: string;
    menuOrder: number;
}

interface Props {
    isMobile: boolean;
    servicesData: {}; 
    navigationData: NavigationItem[];
    setIsOpen: (isOpen: boolean) => void;
}

const NavigationLinks = ({ isMobile, servicesData, navigationData, setIsOpen }: Props) => {

    console.log(navigationData)

    const pathname = usePathname();

    const sortedNavigationData = [...navigationData].sort((a, b) => a.menuOrder - b.menuOrder);

    const Links = sortedNavigationData.map((node) => {
        let link = `/${node.slug}`;
        if (node.slug === 'tjanster') {
            link = '/#tjanster';
        }
        if (node.slug === 'hem') {
            link = '/';
        }

        return {
            page: node.title,
            link,
            id: node.slug
        };
    });

    return (
        <div className={`NavigationLinks NavigationLinks--${isMobile ? "Mobile" : "Desktop"}`}>
            {Links.map(({ page, link, id }) => (
                <Link
                    className={`NavigationLinks__Link ${isActiveLink(pathname, link)}`}
                    href={link}
                    key={id}
                    onClick={() => setIsOpen(false)}
                >
                    {page}
                </Link>
            ))}
        </div>
    );
}

export default NavigationLinks;
