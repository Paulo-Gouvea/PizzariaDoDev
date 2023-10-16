import { styled } from "styled-components/native";

interface ButtonProps {
    color: string;
}

interface TextProps {
    color: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 30px 20px 0;
`;

export const GoBackButtonWrapper = styled.View`
    width: 100%;
    height: 60px;
`;

export const GoBackButton = styled.TouchableOpacity`
    height: 100%;
    width: 60px;

    align-items: center;
    justify-content: center;
`;

export const TableSituationWrapper = styled.View`
`;

export const TableSituation = styled.Text`
    font-size: 24px;
`;

export const TableSituationWithColor = styled.Text<TextProps>`
    color: ${({ theme, color }) => color === 'red' ? theme.COLORS.RED : theme.COLORS.GREEN};
    font-size: 24px;
`;

export const ButtonWrapper = styled.View`
    margin: 15px 0 15px;
    width: 100%;
    align-items: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${({ theme, color }) => color === 'green' ? theme.COLORS.GREEN : theme.COLORS.RED};
    width: 140px;
    height: 55px;
    border-radius: 16px;

    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalContainer = styled.View`
    flex: 1;
    background-color: black;
    opacity: 0.9;
    align-items: center;
    justify-content: center;
`;

export const ModalWrapper = styled.View`
    width: 80%;
    height: 85%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalCloseButton = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    
    position: absolute;
    top: 0;
    right: 0;

    align-items: center;
    justify-content: center;
`;

export const ModalCloseButtonTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const OrdersContainer = styled.View`
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 52%;
    border-radius: 8px;
`;

export const OrdersContainerTitle = styled.Text`
    font-size: 16px;
`;

export const OrdersListContainer = styled.View`
    flex: 1;
`;