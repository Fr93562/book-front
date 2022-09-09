import styled from 'styled-components';
import theme from '../theme';

// header

export const Header = styled.header`
    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.colors.grey100};

    a {
        margin: 0px ${theme.margins.m} 0px ${theme.margins.m};
    }
`;

export const Navigation = styled.nav`
    width: 300px;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;

    position: fixed;
    right: 0px;
    top: 60px;

    background-color: ${theme.colors.red40};
`;

export const List = styled.ul`
    list-style: none;

    padding: 0;
    margin: ${theme.margins.xl} 0px 0px 0px;
`;

export const ListItem = styled.li`
    margin: 0px 0px ${theme.margins.xl} 0px;

    a {
        font-family: ${theme.fonts.primary};
        font-size: ${theme.sizes.m};
        font-weight: bold;
        color: ${theme.colors.white};

        margin: 0px;
    }
`;

export const Sublist = styled(List)`
    display: flex;
    flex-direction: row;
    justify-content: center;

    position: absolute;
    bottom: 160px;

    margin: 0px;
`;

export const SublistItem = styled.li`
    margin: 0px ${theme.margins.m} 0px ${theme.margins.m};

    a {
        padding: 12px;
        margin: 0px;

        border: 2px solid ${theme.colors.white};
        border-radius: 50%;
    }
`;


// common
