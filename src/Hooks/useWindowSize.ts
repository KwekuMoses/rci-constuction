const isBrowser = typeof window !== "undefined";

export const useWindowSize = () => {
    if (!isBrowser) {
        // Return a default size for SSR
        return { width: undefined, height: undefined };
    }

    // For client-side, return the current window size
    return { width: window.innerWidth, height: window.innerHeight };
};
