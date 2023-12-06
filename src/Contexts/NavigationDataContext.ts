// src/contexts/NavigationDataContext.js
import { createContext, useContext } from 'react';

const NavigationDataContext = createContext(null);

export const useNavigationData = () => useContext(NavigationDataContext);
export default NavigationDataContext;
