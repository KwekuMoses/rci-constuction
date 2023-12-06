import { parse } from 'node-html-parser';

export const parseNavigationHTML = (htmlString: string) => {
    const root = parse(htmlString);
    const links = root.querySelectorAll('.wp-block-navigation-item__content').map((link, index) => {
        const label = link.textContent.trim() || '';
        const id = `nav-link-${label.toLowerCase().replace(/\s+/g, '-')}-${index}`;
        return {
            id,
            href: link.getAttribute('href'),
            label
        };
    });
    return links;
};
