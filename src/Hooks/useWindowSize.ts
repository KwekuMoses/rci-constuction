import { useState, useEffect } from 'react';

interface Size {
    width: number | undefined;
    height: number | undefined;
}

export const useWindowSize = () => {
    // Use the Size type for the state
    const [size, setSize] = useState<Size>({ width: undefined, height: undefined });

    useEffect(() => {
        const handleResize = () => {
            // Now this assignment is valid
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            // Call handler immediately to set initial size
            handleResize();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    return size;
};