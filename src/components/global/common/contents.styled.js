import styled from 'styled-components';
import theme from '../theme';

// header

export const TextHeader = styled.strong`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.sizes.m};
    color: ${theme.colors.white};

    margin-left: ${theme.margins.m};
`;

export const ButtonNavigation = styled.button`
    margin: 0px ${theme.margins.m} 0px 0px;
    padding: ${theme.margins.xs};

    border: 2px solid  ${(props) => props.color};
    border-radius: ${theme.margins.xs};
    background-color: transparent;

    cursor: pointer;

    transition-duration: 500ms;
    transition-property: border;
`;

// commons

export const Svg = styled.svg`
    width: 16px;
    height: 16px;

    margin-right:  ${(props) => props.margin ? theme.margins.m : '0px' };

    transition-duration: 500ms;
    transition-property: fill;
`;