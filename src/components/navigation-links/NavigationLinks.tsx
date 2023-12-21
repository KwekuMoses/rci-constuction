import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavigationLinks.scss';
import { isActiveLink } from '@/utils/routeHelpers';
import { parseNavigationHTML } from '@/utils/parseNavigationHTML';
import { fetchNavigationData } from '@/api/wordpress/api';
interface Props {
    isMobile: boolean;
    servicesData: {};
    navigationData: [{
        content: {
            rendered: string
        }
    }] | {};
    setIsOpen: (isOpen: boolean) => void;
}

const NavigationLinks = ({ isMobile, servicesData, navigationData, setIsOpen }: Props) => {
    const [data, setData] = React.useState([]);

    const pathname = usePathname();

    const navigationDataString = Array.isArray(navigationData) && navigationData[0]?.content?.rendered
        ? navigationData[0].content.rendered
        : '';

    const links = navigationDataString
        ? parseNavigationHTML(navigationDataString)
        : [];


    useEffect(() => {
        const fetchData = async () => {
            let data = await fetchNavigationData()
            setData(data)
        }
        fetchData()
    }
        , [])

    console.log(data)

    const Links = [
        {
            page: 'Hem',
            link: '/',
            id: 1
        },
        {
            page: 'Tjänster',
            link: '/#tjanster',
            id: 2
        },
        {
            page: 'Våra Projekt',
            link: '/vara-projekt',
            id: 3
        },
        {
            page: 'Karriär',
            link: '/karriar',
            id: 4
        },

        {
            page: 'Om oss',
            link: '/om-oss',
            id: 5
        },

        {
            page: 'Kontakt',
            link: '/kontakt',
            id: 6
        },
    ]

    return (
        <div className={`NavigationLinks NavigationLinks--${isMobile ? "Mobile" : "Desktop"}`}>
            {Links.map(({ page, link, id }) => (
                <Link
                    className={`NavigationLinks__Link ${isActiveLink(pathname, link)}`}
                    href={`${link}`}
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
