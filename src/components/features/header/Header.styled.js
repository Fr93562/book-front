import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.colors.grey100};

    a {
        margin: 0px ${({theme}) => theme.margins.m} 0px ${({theme}) => theme.margins.m};
    }
`;

export const HeaderText = styled.strong`
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: ${({theme}) => theme.sizes.m};
    color: ${({theme}) => theme.colors.white};

    margin-left: ${({theme}) => theme.margins.m};
`;