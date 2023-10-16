import styled from "styled-components/native";

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

export const Filter = styled.View`
    height: 10%;
    margin: 0 30px 0;
    flex-direction: row;
    align-items: center;

    border-width: 1px;
    border-style: solid;
    border-color: black;
`;

export const FilterIconContainer = styled.View`
    height: 100%;
    width: 20%;
    align-items: center;
    justify-content: center;

    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: black;
`;

export const FilterTitleContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const FilterTitle = styled.Text`
    font-size: 12px;
`;

export const ProductSelectionListContainer = styled.View`
    flex: 1;
    padding-top: 30px;

    align-items: center;
`;

export const ButtonWrapper = styled.View`
    margin-top: 15px;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    width: 150px;
    height: 50px;
    border-radius: 16px;
    margin-bottom: 15px;

    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;