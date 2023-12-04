import { usePathname } from 'next/navigation'


export const useActiveLink = (title: string) => {
    const pathname = usePathname();

    //smelly code
    if (pathname === '/' && title === 'Hem') {
        return 'active';
    }

    return pathname === title ? 'active' : '';
};