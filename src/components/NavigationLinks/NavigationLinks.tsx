import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationLinks.scss';
import { isActiveLink } from '@/utils/routeHelpers';
import { parseNavigationHTML } from '@/utils/parseNavigationHTML'; // Import the utility function



interface Props {
    isMobile: boolean;
    servicesData: {};
    navigationData: [{
        content: {
            rendered: string
        }
    }] | {};
}

const NavigationLinks = ({ isMobile, servicesData, navigationData }: Props) => {

    const pathname = usePathname();

    const navigationDataString = Array.isArray(navigationData) && navigationData[0]?.content?.rendered
        ? navigationData[0].content.rendered
        : '';

    const links = navigationDataString
        ? parseNavigationHTML(navigationDataString)
        : [];

    return (
        <div className={`NavigationLinks NavigationLinks--${isMobile ? "Mobile" : "Desktop"}`}>
            {links.map(({ label, id }) => (
                <Link
                    className={`NavigationLinks__Link ${isActiveLink(pathname, label)}`}
                    href={`/${label.toLocaleLowerCase()}`}
                    key={id}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}

export default NavigationLinks;
