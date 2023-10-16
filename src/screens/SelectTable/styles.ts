import { styled } from "styled-components/native";

interface TableButtonProps {
    state: String;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 40px 20px 0;
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

export const SelectTableInfo = styled.Text`
    margin: 20px 0 20px;
    font-size: 26px;
`;

export const TableButtonWrapper = styled.View`
    flex: 1;
`;

export const TableButton = styled.TouchableOpacity<TableButtonProps>`
    background-color: ${({ state, theme }) => state === 'Livre' ? theme.COLORS.GREEN : theme.COLORS.RED};
    height: 180px;
    width: 40%;
    border-radius: 14px;
    padding: 10px 0;
    margin-bottom: 30px;

    align-items: center;
`

export const TableButtonTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
`;

export const TableButtonImage = styled.Image`
    margin-top: 12px;
`;
    
export const TableButtonSubTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 22px;
`;