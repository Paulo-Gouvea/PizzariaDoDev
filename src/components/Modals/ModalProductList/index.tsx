import React from "react";
import { FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import {
    Container,
    Title,
    Filter,
    FilterIconContainer,
    FilterTitleContainer,
    FilterTitle,
    ProductSelectionListContainer,
    ButtonWrapper,
    Button,
    ButtonTitle,
} from './styles';

import { ProductSelectionCard } from "../../Cards/ProductSelectionCard";

import { Product, useOrder } from "../../../hooks/useOrder";

import { productList } from "../../../utils/test/products";
import { handleImageRender } from "../../../utils/methods/handleImageRender";

interface ModalProductListProps {
    onPress: () => void;
}

export function ModalProductList({
    onPress
}: ModalProductListProps){
    const { data, setData } = useOrder();

    function handleUpdateOrder(product: string){
        const newProduct = {
            id: Date.now().toString(),
            title: product,
            size: ''
        } as Product;

        setData([...data, newProduct]);
    }

    return(
        <Container>
            <Title>
                Selecione os produtos:
            </Title>

            <ProductSelectionListContainer>
                <FlatList 
                    data={productList.pizzas}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item) => {
                        return (
                            <ProductSelectionCard
                                image={handleImageRender(item.item.sabor)}
                                title={item.item.sabor}
                                state={item.item.noEstoque === 'sim' ? 'No estoque' : 'Indisponível'}
                                onPress={() => handleUpdateOrder(item.item.sabor)}
                            /> 
                        )
                    }}
                    style={{ width: '90%' }}
                />
            </ProductSelectionListContainer>

            <ButtonWrapper>
                <Button
                >
                    <ButtonTitle
                        onPress={onPress}
                    >
                        Verificar Pedido
                    </ButtonTitle>
                </Button>
            </ButtonWrapper>
        </Container>
    );
}