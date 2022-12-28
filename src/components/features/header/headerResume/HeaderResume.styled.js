import styled from 'styled-components';

export const ResumeTitle = styled.strong`
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: ${({theme}) => theme.sizes.m};
    color: ${({theme}) => theme.colors.white};

    margin-left: ${({theme}) => theme.margins.m};
`;