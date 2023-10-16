import React from "react";
import { ImageSourcePropType } from "react-native";
import { 
    Container,
    ImageContainer,
    Image,
    TitlesContainer,
    Title,
    State,
} from "./styles";

interface ProductSelectionCardProps {
    image: ImageSourcePropType;
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    state: string;
    onPress: () => void;
}

export function OrderCondition({
    image,
    titleOne,
    titleTwo,
    titleThree,
    state,
    onPress,
}: ProductSelectionCardProps){
    return (
        <Container
            onPress={onPress}
            orderCondition={state}
        >
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>

            <TitlesContainer>
                <Title>{titleOne}</Title>

                <Title>{titleTwo}</Title>

                <Title>{titleThree}</Title>
            </TitlesContainer>

            <State>{state}</State>
        </Container>
    );
}