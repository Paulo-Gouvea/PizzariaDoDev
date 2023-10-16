import React, {useState} from "react";
import { FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { 
    Container,
    GoBackButtonWrapper,
    GoBackButton,
    SelectTableInfo,
    TableButtonWrapper,
    TableButton,
    TableButtonTitle,
    TableButtonImage,
    TableButtonSubTitle,
} from "./styles";

import FreeTableImg from '../../utils/images/free_table.png';
import OccupiedTableImg from '../../utils/images/occupied_table.png';

import { useNavigation } from "@react-navigation/native";
import { useTable } from "../../hooks/useTable";

import { TableNavigationProps } from "../../@types/navigation";

export function SelectTable(){
    const [selectedTable, setSelectedTable] = useState<TableNavigationProps>();

    const { navigate, goBack } = useNavigation();
    const { table } = useTable();

    function generateTableImage(state: String){
        if(state === 'Livre'){
            return FreeTableImg;
        } else {
            return OccupiedTableImg;
        }
    }

    function handleTableScreenNavigation(selectedTable: TableNavigationProps){
        setSelectedTable(selectedTable);
        navigate('Table', selectedTable);
    }

    return(
        <Container>
            <GoBackButtonWrapper>
                <GoBackButton
                    onPress={() => goBack()}
                >
                    <Ionicons name="chevron-back" size={48} color="black" />
                </GoBackButton>
            </GoBackButtonWrapper>

            <SelectTableInfo>
                Selecione a mesa:
            </SelectTableInfo>

            <TableButtonWrapper>
                <FlatList 
                    data={table}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    showsVerticalScrollIndicator={false}
                    renderItem={(e) => {
                        return (
                            <TableButton
                                state={e.item.tableState}
                                onPress={() => handleTableScreenNavigation(e.item)}
                            >
                                <TableButtonTitle>{e.item.tableState}</TableButtonTitle>

                                <TableButtonImage
                                    source={generateTableImage(e.item.tableState)}
                                />

                                <TableButtonSubTitle>Mesa {e.item.tableNumber}</TableButtonSubTitle>
                            </TableButton>
                        )
                    }}
                />
            </TableButtonWrapper>
        </Container>
    )
}