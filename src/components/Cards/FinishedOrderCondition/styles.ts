import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.RED};
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

export const Price = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;