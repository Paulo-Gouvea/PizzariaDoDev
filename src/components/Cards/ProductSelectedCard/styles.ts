import styled from "styled-components/native";

interface OptionsStyleProps {
    isButtonPressed: boolean;
}



export const Container = styled.View`
    height: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
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
    margin-left: 3%;
`;

export const Image = styled.Image``;

export const InfoContainer = styled.View`
    width: 76%;
    height: 85%;
`;

export const Title = styled.Text`
    margin: 5px 0 0 5px;
    color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SubTitle = styled.Text`
    font-size: 10px;
    margin: 5px 0 0 5px;
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: -2px;
`;

export const OptionsContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Options = styled.TouchableOpacity<OptionsStyleProps>`
    background-color: ${({ theme, isButtonPressed }) => isButtonPressed === true ? theme.COLORS.DARK_BLUE : theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    height: 80%;
    width: 25%;
`;

export const OptionsTitle = styled.Text<OptionsStyleProps>`
    color: ${({ theme, isButtonPressed }) => isButtonPressed === true ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    font-size: 10px;
`;

export const CloseButton = styled.TouchableOpacity`
    position: absolute;
    top: 2px;
    right: 10px;
`;

export const CloseButtonTitle = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
`;