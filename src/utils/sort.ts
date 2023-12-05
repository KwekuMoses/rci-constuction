interface MenuItem {
    menu_order: number;
    title: {
        rendered: string;
    };
}

export const sortByMenuOrder = (items: MenuItem[]) => {
    if (!items) {
        return [];
    }

    return items.sort((a, b) => a.menu_order - b.menu_order);
};