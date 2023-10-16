import React from "react";
import { Image } from "react-native";
import {
    Container,
    Wrapper,
    Title,
    Button,
    ButtonTitle,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { useOrder } from "../../hooks/useOrder";
import { useOrderSize } from "../../hooks/useOrderSize";
import { useTable } from "../../hooks/useTable";

import ConfirmationIMG from "../../utils/images/Confirm.png";

export function Confirmation(){
    const { navigate } = useNavigation();

    return (
        <Container>
            <Wrapper>
                <Title>Mesa Fechada!</Title>

                <Image 
                    source={ConfirmationIMG}
                />

                <Button
                    onPress={() => navigate('Home')}
                >
                    <ButtonTitle>
                        Voltar para a tela inicial
                    </ButtonTitle>
                </Button>
            </Wrapper>
        </Container>
    )
}