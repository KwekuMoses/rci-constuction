export const isActiveLink = (pathname: string, link: string) => {
    // Normalize both pathname and link by removing trailing slashes
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const normalizedLink = link.endsWith('/') ? link.slice(0, -1) : link;

    return normalizedPathname === normalizedLink ? 'active' : '';
};
