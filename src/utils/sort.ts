
export const sortByMenuOrder = <T extends { menu_order: number, title: { rendered: string } }>(items: T[]): T[] => {
    if (!items) {
        return [];
    }

    return items.sort((a, b) => a.menu_order - b.menu_order);
};
