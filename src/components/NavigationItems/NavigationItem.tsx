import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationItems.scss';
import { isActiveLink } from '@/Utils/routeHelpers';
import useFetchPageContent from '@/Hooks/useFetchPageContent';

const NavigationItems = () => {
    const { pagesData, isLoading } = useFetchPageContent();
    const pathname = usePathname();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const sortedPages = pagesData
        ? [...pagesData].sort((a, b) => a.menu_order - b.menu_order)
        : [];

    return (
        <div className="NavigationItems">
            {sortedPages.map(({ menu_order, title }) => (
                <Link
                    className={`NavigationItems__Link ${isActiveLink(pathname, title.rendered)}`}
                    href={title.rendered}
                    key={menu_order}
                >
                    {title.rendered}
                </Link>
            ))}
        </div>
    );
}

export default NavigationItems;
