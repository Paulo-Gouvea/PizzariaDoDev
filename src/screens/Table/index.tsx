import React, { useEffect, useState } from "react";
import { FlatList, Modal } from "react-native";
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
    ModalContainer,
    ModalWrapper,
    ModalCloseButton,
    ModalCloseButtonTitle,
    OrdersContainer,
    OrdersContainerTitle,
    OrdersListContainer,
} from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { TableNavigationProps } from "../../@types/navigation";
import { Product, useOrder } from "../../hooks/useOrder";

import { ModalProductList } from "../../components/Modals/ModalProductList";
import { ModalCurrentOrder } from "../../components/Modals/ModalCurrentOrder";
import { ModalConfirmOrder } from "../../components/Modals/ModalConfirmOrder";
import { OrderCondition } from "../../components/Cards/OrderCondition";

import { Table as TableType, useTable } from "../../hooks/useTable";
import { useOrderSize } from "../../hooks/useOrderSize";
import { handleImageRender } from "../../utils/methods/handleImageRender";

export function Table(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalScreen, setModalScreen] = useState('Selecionar Produto');

    const { data, setData } = useOrder();
    const { table, setTable } = useTable();
    const { dataOrder, setDataOrder } = useOrderSize();
    const { goBack, navigate } = useNavigation();
    const { params } = useRoute();
    const { tableState, tableNumber } = params as TableNavigationProps;

    useEffect(()=> {
        handleCheckCondition()
    }, [])

    function handleNavigateToOrderConfirmationModal(){
        for(let i = 0; i < data.length; i++){
            const filteredDataOrder = dataOrder.filter((element) => element.title === data[i].title);
            const getLastOne = filteredDataOrder[filteredDataOrder.length - 1];
            const size = getLastOne.size;
            data[i].size = size;

            const reversedData = dataOrder.reverse();
            const eliminateUsedElement = reversedData.filter((element) => element !== getLastOne);
            const fixReversedDataOrder = eliminateUsedElement.reverse();

            setDataOrder(fixReversedDataOrder);
        }

        setModalScreen('Confirmar Ordem');
    }

    function handleCloseModal(){
        setIsModalOpen(!isModalOpen);
        setModalScreen('Selecionar Produto');
        setData([]);
    }

    function handleMakeOrder(){
        setIsModalOpen(!isModalOpen);
        setModalScreen('Selecionar Produto');
        
        const currentOrder = data;
        currentOrder.forEach((product) => product.state = 'Preparando');
        const currentTable = table.filter((table) => table.tableNumber === tableNumber);
        currentTable[0].orders.push(currentOrder);
        currentTable[0].tableState = 'Ocupada';

        const deleteOldList = table.filter((table) => table.tableNumber !== tableNumber);
        deleteOldList.push(currentTable[0]);

        const numbers = ['01', '02', '03', '04', '05', '06', '07' , '08'];
        const orderedTables:TableType[] = [];

        for(let i = 0; i < numbers.length; i++){
            const element = deleteOldList.filter((table) => table.tableNumber === numbers[i]);
            orderedTables.push(element[0]);
        }

        setTable(orderedTables);

        setData([]);
    }

    function getCurrentTableOrders(){
        const getCurrentTable = table.filter((table) => table.tableNumber === tableNumber);
        return getCurrentTable[0].orders;
    }

    function handleQuantityOfOrders(){
        const getCurrentTable = table.filter((table) => table.tableNumber === tableNumber);
        const quantity = getCurrentTable[0].orders.length;
        return quantity;    
    }

    function handleImage(order: Product[]){
        const firstTitle = order[0].title;
        const image = handleImageRender(firstTitle);
        return image;
    }

    function handleCondition(order: Product[]){
        const conditions = [];
        order.forEach((condition) => conditions.push(condition.state));
        
        if(conditions.every((condition) => condition === '')){
            return '';
        } else if(conditions.some((condition) => condition === 'Disponivel')){
            return 'Disponivel';
        } else if(conditions.every((condition) => condition === 'Entregue')){
            return 'Entregue';
        } else {
            return 'Preparando';
        }
    }

    function handleCheckCondition(){
        const getCurrentTable = table.filter((table) => table.tableNumber === tableNumber);
        const getCurrentTableOrders = getCurrentTable[0].orders;
        let allConditions = []

        for(let i = 0; i < getCurrentTableOrders.length; i++){
            const currentOrder = getCurrentTableOrders[i];
            
            const conditions = currentOrder.map((element)=> element.state);

            for(let j = 0; j < conditions.length; j++){
                allConditions.push(conditions[j]);
            }  
        }

        const check = allConditions.filter((element) => element === 'Preparando');

        if(check.length === allConditions.length){
            return false;
        }else {
            return true;
        }
    }
    
    return(
        <Container>
            <Modal 
                visible={isModalOpen}
                transparent={true}
                onRequestClose={() => setIsModalOpen(!isModalOpen)}
            >
                <ModalContainer>
                    <ModalWrapper>
                        <ModalCloseButton
                            onPress={() => handleCloseModal()}
                        >
                            <ModalCloseButtonTitle>
                                X
                            </ModalCloseButtonTitle>

                        </ModalCloseButton>

                        {
                            modalScreen === 'Selecionar Produto' ? 
                            <ModalProductList onPress={() => setModalScreen('Verificar Produtos')} /> : 
                            ( modalScreen === 'Verificar Produtos' ? 
                            <ModalCurrentOrder  onPress={handleNavigateToOrderConfirmationModal} /> : 
                            <ModalConfirmOrder onPress={() => handleMakeOrder()} />)
                        }
                    </ModalWrapper>
                </ModalContainer>
            </Modal>

            <GoBackButtonWrapper>
                <GoBackButton
                    onPress={() => goBack()}
                >
                    <Ionicons name="chevron-back" size={48} color="black" />
                </GoBackButton>
            </GoBackButtonWrapper>

            <TableSituationWrapper>
                <TableSituation>
                    Mesa {tableNumber}
                </TableSituation>

                <TableSituation>
                    Situação atual: {tableState === 'Livre' ? <TableSituationWithColor color="green" >Livre</TableSituationWithColor> : <TableSituationWithColor color="red" >Ocupada</TableSituationWithColor>}
                </TableSituation>
            </TableSituationWrapper>

            <ButtonWrapper>
                <Button
                    color="green"
                    onPress={() => setIsModalOpen(!isModalOpen)}
                >
                    <ButtonTitle>
                        Criar Pedido
                    </ButtonTitle>
                </Button>
            </ButtonWrapper>

            {
                handleQuantityOfOrders() === 0 ? '' :
                <OrdersContainer>
                    <OrdersContainerTitle>
                        Quantidade de pedidos: {handleQuantityOfOrders()}
                    </OrdersContainerTitle>

                    <OrdersListContainer>
                        <FlatList 
                            data={getCurrentTableOrders()}
                            showsVerticalScrollIndicator={false}
                            renderItem={(order) => {
                                return(
                                    <OrderCondition 
                                        image={handleImage(order.item)}
                                        titleOne={order.item[0].title}
                                        titleTwo={order.item[1] !== undefined ? order.item[1].title : ''}
                                        titleThree={order.item[2] !== undefined ? order.item[2].title : ''}
                                        state={handleCondition(order.item)}
                                        onPress={() => {}}
                                    />
                                )
                            }}
                        />
                    </OrdersListContainer>
                </OrdersContainer>
            }

            <ButtonWrapper style={{ marginLeft:20 , position: 'absolute', bottom: 0 }}>
                <Button
                    color="red"
                    disabled={handleCheckCondition()}
                    onPress={() => {
                        let ordersList = getCurrentTableOrders();
                        navigate('CloseTable', {ordersList, tableState, tableNumber});
                    }}
                >
                    <ButtonTitle>
                        Fechar Mesa
                    </ButtonTitle>
                </Button>
            </ButtonWrapper>
        </Container>
    )
}