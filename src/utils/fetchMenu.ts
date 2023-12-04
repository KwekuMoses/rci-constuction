
import { pagesPath } from '../api/routes/routes';

export const fetchMenu = async () => {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const appPassword = process.env.NEXT_PUBLIC_LOCAL_PASSWORD;

    if (!appPassword) {
        console.error('Application password is not set');
        return [];
    }

    const token = btoa(`${username}:${appPassword}`);

    try {
        const response = await fetch(pagesPath, {
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
