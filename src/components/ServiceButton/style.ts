import styled from 'styled-components/native';

export const Container = styled.View`
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