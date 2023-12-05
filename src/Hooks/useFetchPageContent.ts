import { useState, useEffect } from 'react';
import { fetchPageContent } from '@/Utils/fetchContent';
import { SimpleCache } from './useCache';

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
const pageContentCache = new SimpleCache<PagesData[]>();

const useFetchPageContent = (pageId?: number): FetchContentReturn => {
    const cacheKey = pageId ? `page-${pageId}` : 'all-pages';
    const [pagesData, setPageContent] = useState<PagesData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const cachedData = pageContentCache.get(cacheKey);
            if (cachedData) {
                setPageContent(cachedData);
            } else {
                try {
                    const data = await fetchPageContent(pageId);
                    pageContentCache.set(cacheKey, data);
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
