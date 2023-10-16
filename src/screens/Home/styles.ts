import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 70px 20px 0;
`;

export const LogoWrapper = styled.View`
    width: 100%;
    height: 120px;

    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    height: 100%;
`;

export const GreetingsWrapper = styled.View`
    margin-top: 45px;
`;

export const Greetings = styled.Text`
    font-size: 25px;
    margin-bottom: 5px;
`;

export const ServicesWrapper = styled.View`
    margin-top: 40px;
    height: 195px;
    width: 100%;

    flex-direction: row;
    justify-content: space-around;
`;
    
export const ServicesButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    height: 100%;
    width: 40%;
    border-radius: 14px;

    align-items: center;
    justify-content: center;
`

export const ServicesButtonImageWrapper = styled.View`
    height: 68%;
    width: 80%;
    align-items: center;
    justify-content: center;
`

export const ServicesButtonImage = styled.Image`
    height: 100%;
    width: 90%;
`;

export const ServicesButtonTitle = styled.Text`
    font-size: 18px;
    margin-top: 4px;
`