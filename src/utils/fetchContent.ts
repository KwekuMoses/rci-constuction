import { pagesPath } from '../api/routes/routes';

export const fetchPageContent = async (id: number | null | undefined) => {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const appPassword = process.env.NEXT_PUBLIC_LOCAL_PASSWORD;

    if (!appPassword) {
        console.error('Application password is not set');
        return [];
    }

    const token = btoa(`${username}:${appPassword}`);
    try {

        const url = id != null ? `${pagesPath}/${id}` : pagesPath;

        const response = await fetch(url, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Failed to fetch menu:', error.message);
        return [];
    }
};

