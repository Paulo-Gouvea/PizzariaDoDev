import styled from "styled-components/native";

interface ButtonProps {
    color: string;
}

export const Container = styled.View`
    position: absolute;
    height: 95%;
    width: 100%;
    bottom: 0;
`;

export const Title = styled.Text`
    font-size: 22px;
    margin: 0 0 15px 10px;
`;

export const ProductSelectedCardList = styled.View`
    height: 70%;
    padding: 0 3%;
`;

export const ButtonsContainer = styled.View`
    flex: 1;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    height: 50%;
    width: 40%;
    background-color: ${({ theme, color }) => color === 'red' ? theme.COLORS.RED : (color === 'green' ? theme.COLORS.GREEN : theme.COLORS.LIGHT_GREEN)};

    border-radius: 12px;

    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`;