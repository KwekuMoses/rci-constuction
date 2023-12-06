import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationLinks.scss';
import { isActiveLink } from '@/utils/routeHelpers';
import useFetchPageContent from '@/Hooks/useFetchPageContent';

interface Props {
    isMobile: boolean;
}

const NavigationLinks = (
    // { isMobile }: Props
) => {
// const { pagesData, isLoading } = useFetchPageContent();
// const pathname = usePathname();

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // // Check if pagesData is an array and sort if it is
    // const sortedPages = Array.isArray(pagesData)
    //     ? [...pagesData].sort((a, b) => a.menu_order - b.menu_order)
    //     : [];

    const isMobile = false

    return (
        <div className={`NavigationLinks NavigationLinks--${isMobile ? "Mobile" : "Desktop"}`}>
            {/* {sortedPages.map(({ menu_order, title }) => (
                <Link
                    className={`NavigationLinks__Link ${isActiveLink(pathname, title.rendered)}`}
                    href={title.rendered}
                    key={menu_order}
                >
                    {title.rendered}
                </Link>
            ))} */}
        </div>
    );
}

export default NavigationLinks;
