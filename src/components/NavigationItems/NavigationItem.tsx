import React, { useState, useEffect } from 'react'
import { fetchMenu } from '../../utils/fetchMenu';
import Link from 'next/link';
import './NavigationItems.scss'
import { sortByMenuOrder } from '../../utils/sort';
import { useActiveLink } from '@/utils/routeHelpers';
import useFetchPageContent from '@/Hooks/useFetchPageContent';


const NavigationItems = () => {
    const { pageContent, isLoading } = useFetchPageContent() || [];
    const sortedPageContent = pageContent ? sortByMenuOrder(pageContent) : [];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="NavigationItems">
            {sortedPageContent.map(({ menu_order, title }) => (
                <Link className={`NavigationItems__Link ${useActiveLink(title.rendered)}`} href={title.rendered} key={menu_order}> {title.rendered} </Link>
            ))}
        </div>
    )
}

export default NavigationItems