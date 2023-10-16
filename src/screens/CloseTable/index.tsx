import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { 
    Container,
    GoBackButtonWrapper,
    GoBackButton,
    TableSituationWrapper,
    TableSituation,
    TableSituationWithColor,
    ButtonWrapper,
    Button,
    ButtonTitle,
    OrdersContainer,
    OrdersContainerWrapper,
    OrdersContainerTitle,
    OrdersListContainer,
    FilterContainer,
    FilterContainerTitle,
    Filter,
    FilterIconContainer,
    FilterIconTextContainer,
    FilterText,
    FilterTextList,
    FilterTextListButton,
    FilterTextListButtonTitle,
} from "./styles";

import { CloseTableNavigationProps } from "../../@types/navigation";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Product, useOrder } from "../../hooks/useOrder";
import { useTable, Table as TableType } from "../../hooks/useTable";
import { useOrderSize } from "../../hooks/useOrderSize";
import { handleImageRender } from "../../utils/methods/handleImageRender";
import { productList } from "../../utils/test/products";

import { FinishedOrderCondition } from "../../components/Cards/FinishedOrderCondition";

export function CloseTable(){
    const [filterState, setFilterState] = useState(false);
    const [filterMessage, setFilterMessage] = useState('Selecione a forma de pagamento');
    const [total, setTotal] = useState(0);
    

    const { table, setTable } = useTable();
    const { data, setData } = useOrder();
    const { dataOrder, setDataOrder } = useOrderSize();
    const { goBack, navigate } = useNavigation();
    const { params } = useRoute();
    const {ordersList, tableState, tableNumber} = params as CloseTableNavigationProps;   

    const paymentOptions = [
        'Selecione a forma de pagamento',
        'Cartão de crédito',
        'Cartão de débito',
        'Pix',
        'Vale refeição',
        'Dinheiro'
    ];

    function handleImage(order: Product[]){
        const firstTitle = order[0].title;
        const image = handleImageRender(firstTitle);
        return image;
    }

    function handleTotalOrderPrice(pList: Product[]){
        const titles = pList.map((element) => element.title);
        const sizes = pList.map((element) => element.size);

        let teste = [];

        for(let i = 0; i < ordersList[0].length; i++){
            let element = {
                title: titles[i],
                size: sizes[i]
            }

            teste.push(element);
        }

        let values = [];

        for(let i = 0; i < teste.length; i++) {
            const getProductPrice = productList.pizzas.filter((element) => element.sabor === teste[i].title);

            if(teste[i].size === 'Pequena'){
                values.push(getProductPrice[0].precos[0]);
            } else if(teste[i].size === 'Média'){
                values.push(getProductPrice[0].precos[1]);
            } else if(teste[i].size === 'Grande'){
                values.push(getProductPrice[0].precos[2]);
            }
        }

        let sum = 0;

        for(let i = 0; i < values.length; i++){
            sum = sum + values[i];
        }

        return sum;
    }

    function handleTotalPrice(){
        let total = 0;

        for(let i = 0; i < ordersList.length; i++){
            total = total + handleTotalOrderPrice(ordersList[i]);
        }

        return total;
    }

    function handleFilterState(title: string){
        setFilterMessage(title);
        setFilterState(false);
    }

    function handleFinishTable(){
        const currentTable = table.filter((table) => table.tableNumber === tableNumber);
        currentTable[0].orders = [];
        currentTable[0].tableState = 'Livre';    

        const deleteOldList = table.filter((table) => table.tableNumber !== tableNumber);
        deleteOldList.push(currentTable[0]);

        const numbers = ['01', '02', '03', '04', '05', '06', '07' , '08'];
        const orderedTables:TableType[] = [];

        for(let i = 0; i < numbers.length; i++){
            const element = deleteOldList.filter((table) => table.tableNumber === numbers[i]);
            orderedTables.push(element[0]);
        }

        setTable(orderedTables);

        navigate('Confirmation');
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

            <TableSituationWrapper>
                <TableSituation>
                    Fechamento de pedidos
                </TableSituation>
            </TableSituationWrapper>

            <OrdersContainer>
                    <OrdersContainerWrapper>
                        <OrdersContainerTitle>
                            Quantidade de pedidos: {ordersList.length}
                        </OrdersContainerTitle>

                        <OrdersContainerTitle>
                            Total: {`R$ ${handleTotalPrice()},00`}
                        </OrdersContainerTitle>
                    </OrdersContainerWrapper>

                    <OrdersListContainer>
                        <FlatList 
                            data={ordersList}
                            showsVerticalScrollIndicator={false}
                            renderItem={(order) => {
                                return(
                                    <FinishedOrderCondition
                                        image={handleImage(order.item)}
                                        titleOne={order.item[0].title}
                                        titleTwo={order.item[1] !== undefined ? order.item[1].title : ''}
                                        titleThree={order.item[2] !== undefined ? order.item[2].title : ''}
                                        price={`R$ ${handleTotalOrderPrice(order.item).toString()},00`}
                                        onPress={() => {}}
                                    />
                                )
                            }}
                        />
                    </OrdersListContainer>
                </OrdersContainer>


                {
                        filterState === true ?
                        <FilterTextList>
                            <FlatList 
                                data={paymentOptions}
                                renderItem={(element) => {
                                    return (
                                        <FilterTextListButton
                                            onPress={() => handleFilterState(element.item)}
                                        >
                                            <FilterTextListButtonTitle>
                                                {element.item}
                                            </FilterTextListButtonTitle>
                                        </FilterTextListButton>
                                    )
                                }}
                            />
                        </FilterTextList>
                        :
                        ''
                }
                <FilterContainer>
                    <FilterContainerTitle>
                        Forma de Pagamento:
                    </FilterContainerTitle>

                    <Filter
                        onPress={() => setFilterState(!filterState)}
                    >
                        <FilterIconContainer>
                            <Ionicons name="caret-down" size={32} color="black" />
                        </FilterIconContainer>

                        <FilterIconTextContainer>
                            <FilterText>
                                {filterMessage}
                            </FilterText>
                        </FilterIconTextContainer>
                    </Filter>
                </FilterContainer>

            <ButtonWrapper style={{ marginLeft:20 , position: 'absolute', bottom: 0 }}>
                <Button
                    color={
                        filterMessage === 'Selecione a forma de pagamento' ?
                        "lightGreen":
                        "green"}
                    onPress={() => handleFinishTable()}
                    disabled={
                        filterMessage === 'Selecione a forma de pagamento' ?
                        true :
                        false
                    }
                >
                    <ButtonTitle>
                        Confirmar
                    </ButtonTitle>
                </Button>
            </ButtonWrapper>
        </Container>
    )
}