import type { Order } from "@/types/Order";
import type { Students } from "@/types/Student";

import React, { createContext, useState, type ReactNode } from "react";

interface AppContextType {
    students: Students[];
    orders: Order[];
    setOrders: React.Dispatch<React.SetStateAction<Order[]>>;

    loading: boolean;
    error: string | null;
    fetchStudents: () => Promise<void>;
}


export const AppContext = createContext<AppContextType | null>(null);

type ChildrenProps = {
    children: ReactNode;
};

export default function AppProvider({ children }: ChildrenProps) {
    const [students, setStudents] = useState<Students[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("https://696b4411624d7ddccaa0a3bd.mockapi.io/students");
            const data = await res.json();

            setStudents(data);
        } catch {
            setError("Failed to load students");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContext.Provider
            value={{
                students,
                orders,
                setOrders,
                loading,
                error,
                fetchStudents,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

