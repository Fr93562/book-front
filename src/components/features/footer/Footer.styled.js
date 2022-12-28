import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background-color: ${({theme}) => theme.colors.white};
`;

export const FooterText = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: ${({theme}) => theme.sizes.m};
    color: ${({theme}) => theme.colors.red40};
    font-weight: bold;
`;