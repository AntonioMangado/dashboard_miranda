import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarContextProvider = ({ children }) => {
    const [isShown, setIsShown] = useState(true);
    return (
        <SideBarContext.Provider value={{ isShown, setIsShown }}>
            {children}
        </SideBarContext.Provider>
    );
}