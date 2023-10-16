import React from "react";

import { 
    Container,
    LogoWrapper, 
    Logo,
    GreetingsWrapper,
    Greetings,
    ServicesWrapper,
    ServicesButton,
    ServicesButtonImageWrapper,
    ServicesButtonImage,
    ServicesButtonTitle,
} from "./styles";

import LogoImg from '../../utils/images/logo.png';
import WaiterImg from '../../utils/images/waiter.png';

import { useNavigation } from "@react-navigation/native";

export function Home(){
    const { navigate } = useNavigation();

    return(
        <Container>
            <LogoWrapper>
                <Logo 
                    source={LogoImg}
                />
            </LogoWrapper>

            <GreetingsWrapper>
                <Greetings>
                    Bem-vindo!
                </Greetings>
                <Greetings>
                    Selecione o tipo de serviço:
                </Greetings>
            </GreetingsWrapper>

            <ServicesWrapper>
                <ServicesButton
                    onPress={() => navigate('SelectTable')}
                >
                    <ServicesButtonImageWrapper>
                        <ServicesButtonImage
                            source={WaiterImg}
                        />
                    </ServicesButtonImageWrapper>

                    <ServicesButtonTitle>
                        Normal
                    </ServicesButtonTitle>
                </ServicesButton>
            </ServicesWrapper>
        </Container>
    )
}