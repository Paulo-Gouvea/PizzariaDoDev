import React from "react";
import { FlatList, Modal } from "react-native";

import {
    Container,
    Title,
    ProductSelectedCardList,
    ButtonsContainer,
    Button,
    ButtonTitle,
} from './styles';

import { useOrder } from "../../../hooks/useOrder";

import { ProductSelectedCard } from "../../Cards/ProductSelectedCard";
import { handleImageRender } from "../../../utils/methods/handleImageRender";

interface ModalCurrentOrderProps {
    onPress: () => void;
}

export function ModalCurrentOrder({
    onPress,
}: ModalCurrentOrderProps){
    const { data, setData } = useOrder();

    function handleCancelOrder(){
        setData([]);
    }

    function handleDeleteProduct(id: string){
        const filteredProductList = data.filter((product) => product.id !== id);
        setData(filteredProductList);
    }

    return(
        <Container>
            <Title>
                Produtos do pedido:
            </Title>

            <ProductSelectedCardList>
                <FlatList 
                    data={data}
                    renderItem={(i) => {
                        return (
                            <ProductSelectedCard 
                                image={handleImageRender(i.item.title)}
                                title={i.item.title}
                                onPress={() => handleDeleteProduct(i.item.id)}
                                
                            />
                        );
                    }}  
                />
            </ProductSelectedCardList>

            <ButtonsContainer>
                <Button
                    color="red"
                    onPress={handleCancelOrder}
                >
                    <ButtonTitle>
                        Cancelar Pedido
                    </ButtonTitle>
                </Button>

                <Button
                    color={data.length === 0 ? "light green" : "green"}
                    onPress={onPress}
                    disabled={data.length === 0 ? true : false}
                >
                    <ButtonTitle>
                        Fazer Pedido
                    </ButtonTitle>
                </Button>
            </ButtonsContainer>
        </Container>
    );
}