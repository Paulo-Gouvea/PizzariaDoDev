export type TableNavigationProps = {
    tableState: string;
    tableNumber: string;
}

export type CloseTableNavigationProps = {
    ordersList: Product[][];
    tableState: string;
    tableNumber: string; 
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            SelectTable: undefined;
            Table: TableNavigationProps;  
            CloseTable: CloseTableNavigationProps;
            Confirmation: undefined;
        }
    }
}