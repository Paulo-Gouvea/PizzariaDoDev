import styled from "styled-components/native";

export const Container = styled.View`
    position: absolute;
    height: 95%;
    width: 100%;
    bottom: 0;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    margin: 20% 0 15px 10px;
    text-align: center;
`;

export const ImageContainer = styled.View`
    width: 60%;
    height: 35%;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
`;

export const ButtonsContainer = styled.View`
    flex: 1;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
    height: 50%;
    width: 40%;
    background-color: ${({theme}) => theme.COLORS.BLUE};

    border-radius: 12px;

    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-size: 16px;
`;