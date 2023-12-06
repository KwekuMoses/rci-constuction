// utils/useMakeHeaderSticky.js

import { useEffect } from 'react';

const useMakeHeaderSticky = (headerId: string, stickyOffset: number, isOpen: boolean) => {
    useEffect(() => {
        if (!isOpen) {
            let lastScrollTop = 0;
            const handleScroll = () => {
                const currentScroll = window.scrollY || document.documentElement.scrollTop;
                const headerElement = document.getElementById(headerId);

                if (!headerElement) return;

                if (currentScroll > lastScrollTop) {
                    headerElement.style.top = `${stickyOffset}px`; // Hide header
                } else {
                    headerElement.style.top = "0"; // Show header
                }
                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isOpen]);
};

export default useMakeHeaderSticky;
