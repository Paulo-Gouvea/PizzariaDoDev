import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';

interface OrderSizeProviderProps {
   children: ReactNode;
}

export interface OrderSize {
    title: string;
    size: string;
};

interface OrderSizeContextData {
    dataOrder: OrderSize[];
    setDataOrder: React.Dispatch<React.SetStateAction<OrderSize[]>>;
}

export const OrderSizeContext = createContext({} as OrderSizeContextData);


function OrderSizeProvider({ children }: OrderSizeProviderProps){
    const [dataOrder, setDataOrder] = useState<OrderSize[]>([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('tables')
            .orderBy('id')
            .onSnapshot(querySnapshot => {
                const dataOfOrders = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                }) as OrderSize[];

                setDataOrder(dataOfOrders);
            })

        return () => subscriber();      
    }, [])

   return (
       <OrderSizeContext.Provider value={{
            dataOrder,
            setDataOrder,
        }} >
           {children}
       </OrderSizeContext.Provider>
   )
}


function useOrderSize(){
   const context = useContext(OrderSizeContext);

   return context;
}


export { OrderSizeProvider, useOrderSize };