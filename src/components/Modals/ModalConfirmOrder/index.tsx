import React from "react";
import { AntDesign } from '@expo/vector-icons'; 

import {
    Container,
    Title,
    ImageContainer,
    ButtonsContainer,
    Button,
    ButtonTitle
} from './styles';

interface ModalConfirmOrderProps {
    onPress: () => void;
}

export function ModalConfirmOrder({
    onPress
}: ModalConfirmOrderProps){
    return(
        <Container>
            <Title>
                Pedido feito com{'\n'}sucesso!
            </Title>

            <ImageContainer>
                <AntDesign name="checkcircle" size={180} color="green" />
            </ImageContainer>

            <ButtonsContainer>
                <Button
                    onPress={onPress}
                >
                    <ButtonTitle>
                        Voltar para a{'\n'}Tela da Mesa
                    </ButtonTitle>
                </Button>
            </ButtonsContainer>
        </Container>
    );
}