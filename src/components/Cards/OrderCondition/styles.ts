import styled from "styled-components/native";

interface OrderConditionStyleProps {
    orderCondition: string;
}

export const Container = styled.TouchableOpacity<OrderConditionStyleProps>`
    height: 80px;
    width: 100%;
    background-color: ${({ theme, orderCondition }) => orderCondition === 'Preparando' ? theme.COLORS.BLUE : (orderCondition === 'Entregue' ? theme.COLORS.RED : theme.COLORS.GREEN)};
    border-radius: 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
`;

export const ImageContainer = styled.View`
    width: 18%;
    height: 70%;
    background-color: white;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image``;

export const TitlesContainer = styled.View`
    
`;

export const Title = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const State = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;