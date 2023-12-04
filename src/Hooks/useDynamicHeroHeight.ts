// useDynamicHeroHeight.js

import { useState, useEffect } from 'react';

const useDynamicHeroHeight = (headerSelector: string) => {
    const [heroHeight, setHeroHeight] = useState('100vh');

    useEffect(() => {
        const calculateHeight = () => {
            const header = document.querySelector(headerSelector);
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            setHeroHeight(`calc(100vh - ${headerHeight}px)`);
        };

        window.addEventListener('resize', calculateHeight);
        calculateHeight();

        return () => window.removeEventListener('resize', calculateHeight);
    }, [headerSelector]);

    return heroHeight;
};

export default useDynamicHeroHeight;
