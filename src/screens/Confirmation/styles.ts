import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 70px 20px 0;

    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.View`
    height: 70%;
    width: 80%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 16px;

    align-items: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    margin: 5% 0 10%;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 15%;

    background-color: ${({ theme}) => theme.COLORS.GREEN};
    width: 190px;
    height: 55px;
    border-radius: 16px;

    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
`;