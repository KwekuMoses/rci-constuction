import React, { createContext, useContext } from 'react';

const PageDataContext = createContext(null);

export const usePageData = () => useContext(PageDataContext);
