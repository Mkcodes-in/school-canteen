import type { SnacksProps } from "@/types/snack";
import { createContext, useState, type ReactNode } from "react";

interface AppContextType {
    snacks: SnacksProps[];
    setSnacks: React.Dispatch<React.SetStateAction<SnacksProps[]>>;
}

export const AppContext = createContext<AppContextType | null>(null);

type ChildrenProps = {
    children: ReactNode;
};

export default function AppProvider({ children }: ChildrenProps) {
    const [snacks, setSnacks] = useState<SnacksProps[]>([]);

    return (
        <AppContext.Provider value={{ snacks, setSnacks }}>
            {children}
        </AppContext.Provider>
    );
}
