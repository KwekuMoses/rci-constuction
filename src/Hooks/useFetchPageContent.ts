import { useState, useEffect } from 'react';
import { fetchPageContent } from '@/Utils/fetchContent';

interface PagesData {
    menu_order: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
}

interface FetchContentReturn {
    pagesData: PagesData[];
    isLoading: boolean;
}

// Define a cache at the module level with appropriate TypeScript typing
const cache: Record<string, PagesData[]> = {};

const useFetchPageContent = (pageId?: number): FetchContentReturn => {
    const cacheKey = pageId ? `page-${pageId}` : 'all-pages';
    const [pagesData, setPageContent] = useState<PagesData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            if (cache[cacheKey]) {
                // Use cached data
                setPageContent(cache[cacheKey]);
            } else {
            // Fetch new data and update the cache
                try {
                    const data = await fetchPageContent(pageId);
                    cache[cacheKey] = data;
                    setPageContent(data);
                } catch (error) {
                    console.error('Error fetching page content:', error);
                    // Optionally set an error state here
                }
            }

            setIsLoading(false);
        };

        fetchData();
    }, [pageId]); // Adding pageId as a dependency

    return { pagesData, isLoading };
};

export default useFetchPageContent;
