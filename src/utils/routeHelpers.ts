export const isActiveLink = (pathname: string, title: string) => {
    if (pathname === '/' && title === 'Hem') {
        return 'active';
    }
    return pathname === title ? 'active' : '';
};