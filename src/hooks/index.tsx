import React, {ReactNode} from "react";

import { TableProvider } from "./useTable";
import { OrderProvider } from "./useOrder";
import { OrderSizeProvider } from "./useOrderSize";

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({children}: AppProviderProps){
    return (
        <TableProvider>
            <OrderProvider>
                <OrderSizeProvider>
                    {children}
                </OrderSizeProvider>
            </OrderProvider>
        </TableProvider>
    )
}