import { createContext, useState } from 'react';

type SideBarContextProviderProps = {
    children: React.ReactNode;
}

type SideBarContextType = {
    isShown: boolean;
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBarContext = createContext({} as SideBarContextType);

export const SideBarContextProvider = ({ children }: SideBarContextProviderProps) => {
    const [isShown, setIsShown] = useState<boolean>(true);
    return (
        <SideBarContext.Provider value={{ isShown, setIsShown }}>
            {children}
        </SideBarContext.Provider>
    );
}