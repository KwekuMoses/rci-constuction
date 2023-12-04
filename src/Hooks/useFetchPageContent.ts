// useFetchPageContent.js

import { useState, useEffect } from 'react';
import { fetchPageContent } from '../utils/fetchContent';

interface PageContent {
    content: {
        rendered: string;
    };
}

const useFetchPageContent = (pageId?: number) => {

    const [pageContent, setPageContent] = useState<PageContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetchPageContent(pageId);
                setPageContent(data);
            } catch (error) {
                console.error('Error fetching page content:', error);
                // Optionally set an error state here
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return { pageContent, isLoading };
};

export default useFetchPageContent;
