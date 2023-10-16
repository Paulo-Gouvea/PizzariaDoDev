import React from "react";
import { ImageSourcePropType } from "react-native";
import { 
    Container,
    ImageContainer,
    Image,
    TitlesContainer,
    Title,
    Price,
} from "./styles";

interface FinishedOrderConditionCardProps {
    image: ImageSourcePropType;
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    price: string;
    onPress: () => void;
}

export function FinishedOrderCondition({
    image,
    titleOne,
    titleTwo,
    titleThree,
    price,
    onPress,
}: FinishedOrderConditionCardProps){
    return (
        <Container
            onPress={onPress}
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

            <Price>{price}</Price>
        </Container>
    );
}