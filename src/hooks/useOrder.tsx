import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

interface OrderProviderProps {
   children: ReactNode;
}

export interface Product {
    id: string;
    title: string;
    size: string;
    state: string;
}[];

interface OrderContextData {
    data: Product[];
    setData: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const OrderContext = createContext({} as OrderContextData);


function OrderProvider({ children }: OrderProviderProps){
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('tables')
            .orderBy('id')
            .onSnapshot(querySnapshot => {
                const dataOfOrders = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                }) as Product[];

                setData(dataOfOrders);
            })

        return () => subscriber();      
    }, [])

   return (
       <OrderContext.Provider value={{
            data,
            setData,
        }} >
           {children}
       </OrderContext.Provider>
   )
}


function useOrder(){
   const context = useContext(OrderContext);


   return context;
}


export { OrderProvider, useOrder };