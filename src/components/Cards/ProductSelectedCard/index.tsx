import React, {useState} from "react";
import { ImageSourcePropType } from "react-native";
import { 
    Container,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    SubTitle,
    OptionsContainer,
    Options,
    OptionsTitle,
    CloseButton,
    CloseButtonTitle,
} from "./styles";

import { OrderSize, useOrderSize } from "../../../hooks/useOrderSize";

interface ProductSelectedCardProps {
    image: ImageSourcePropType;
    title: string;
    onPress: () => void;
}

export function ProductSelectedCard({
    title,
    image,
    onPress,
}: ProductSelectedCardProps){
    const [smallButton, setSmallButton] = useState(false);
    const [mediumButton, setMediumButton] = useState(false);
    const [largeButton, setLargeButton] = useState(false);

    const { dataOrder, setDataOrder } = useOrderSize();

    function handleGerenateSmallOrder(){
        if(smallButton === true) return;

        let orderSizeList = dataOrder;
        let orderSize = {} as OrderSize;
        
        orderSize = {
            title,
            size: 'Pequena'
        };

        orderSizeList.push(orderSize);

        setDataOrder(orderSizeList)
    }

    function handleGerenateMediumOrder(){
        if(mediumButton === true) return;

        let orderSizeList = dataOrder;
        let orderSize = {} as OrderSize;
        
        orderSize = {
            title,
            size: 'Média'
        };

        orderSizeList.push(orderSize);

        setDataOrder(orderSizeList);
    }

    function handleGerenateLargeOrder(){
        if(largeButton === true) return;

        let orderSizeList = dataOrder;
        let orderSize = {} as OrderSize;
        
        orderSize = {
            title,
            size: 'Grande'
        };

        orderSizeList.push(orderSize);

        setDataOrder(orderSizeList);
    }

    return (
        <Container>
            <ImageContainer>
                <Image 
                    source={image}
                />
            </ImageContainer>

            <InfoContainer>
                <Title>
                    {title}
                </Title>

                <SubTitle>
                    Tamanhos:
                </SubTitle>

                {
                    title.includes('Pizza') === true ?
                    <OptionsContainer>
                        <Options
                            isButtonPressed={smallButton}
                            onPress={() => {
                                setSmallButton(!smallButton)
                                setMediumButton(false)
                                setLargeButton(false)
                                handleGerenateSmallOrder()
                            }}
                        >
                            <OptionsTitle
                                isButtonPressed={smallButton}
                            >
                                Pequena
                            </OptionsTitle>
                        </Options>

                        <Options
                            isButtonPressed={mediumButton}
                            onPress={() => {
                                setMediumButton(!mediumButton)
                                setSmallButton(false)
                                setLargeButton(false)
                                handleGerenateMediumOrder()
                            }}
                        >
                            <OptionsTitle
                                isButtonPressed={mediumButton}
                            >
                                Média
                            </OptionsTitle>
                        </Options>

                        <Options
                            isButtonPressed={largeButton}
                            onPress={() => {
                                setLargeButton(!largeButton)
                                setSmallButton(false)
                                setMediumButton(false)
                                handleGerenateLargeOrder()
                            }}
                        >
                            <OptionsTitle
                                isButtonPressed={largeButton}
                            >
                                Grande
                            </OptionsTitle>
                        </Options>
                    </OptionsContainer> : ''
                }
            </InfoContainer>

            <CloseButton
                onPress={onPress}
            >
                <CloseButtonTitle>
                    X
                </CloseButtonTitle>
            </CloseButton>
        </Container>
    );
}