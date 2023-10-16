import React from "react";
import { ImageSourcePropType } from "react-native";
import { 
    Container,
    ImageContainer,
    Image,
    Title,
    State,
} from "./styles";

interface ProductSelectionCardProps {
    image: ImageSourcePropType;
    title: string;
    state: string;
    onPress: () => void;
}

export function ProductSelectionCard({
    image,
    title,
    state,
    onPress,
}: ProductSelectionCardProps){
    return (
        <Container
            onPress={onPress}
        >
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>

            <Title>{title}</Title>

            <State>{state}</State>
        </Container>
    );
}