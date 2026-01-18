import { createContext, type ReactNode } from "react";
import type { Order } from "@/types/Order";

import { useResource } from "@/hooks/useResource";

import type { Students } from "@/types/Student";
import { createStudent, getStudents } from "@/api/studentApi";
import { createOrder, getOrders } from "@/api/ordersApi";

interface AppContextType {
  students: Students[];
  orders: Order[];

  studentsLoading: boolean;
  ordersLoading: boolean;

  studentsError: string | null;
  ordersError: string | null;

  fetchStudents: () => Promise<void>;
  addStudent: (student: Partial<Students>) => Promise<void>;

  fetchOrders: () => Promise<void>;
  addOrder: (order: Partial<Order>) => Promise<void>;
}

export const AppContext = createContext<AppContextType | null>(null);

type Props = { children: ReactNode };

export default function AppProvider({ children }: Props) {
  const {
    data: students,
    loading: studentsLoading,
    error: studentsError,
    fetchAll: fetchStudents,
    create: addStudent,
  } = useResource<Students>(getStudents, (student) =>
    createStudent(student as Partial<Omit<Students, "id">>)
  );

  const {
    data: orders,
    loading: ordersLoading,
    error: ordersError,
    fetchAll: fetchOrders,
    create: addOrder,
  } = useResource<Order>(getOrders, createOrder);

  return (
    <AppContext.Provider
      value={{
        students,
        orders,

        studentsLoading,
        ordersLoading,

        studentsError,
        ordersError,

        fetchStudents,
        addStudent,

        fetchOrders,
        addOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
