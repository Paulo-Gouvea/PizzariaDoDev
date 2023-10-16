import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { Product } from "./useOrder";

interface TableProviderProps {
   children: ReactNode;
}

export interface Table {
    id: number;
    tableState: string;
    tableNumber: string;
    orders: Product[][];
}[];

interface TableContextData {
    table: Table[];
    setTable: React.Dispatch<React.SetStateAction<Table[]>>;
}

export const TableContext = createContext({} as TableContextData);


function TableProvider({ children }: TableProviderProps){
    const [table, setTable] = useState<Table[]>([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('tables')
            .orderBy('id')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                }) as Table[];

                setTable(data);
            })

        return () => subscriber();      
    }, [])

   return (
       <TableContext.Provider value={{
            table,
            setTable
        }} >
           {children}
       </TableContext.Provider>
   )
}


function useTable(){
   const context = useContext(TableContext);


   return context;
}


export { TableProvider, useTable };