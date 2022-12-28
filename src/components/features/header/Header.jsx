import paths from '../../../configs/paths';
import HeaderResume from "./headerResume/HeaderResume";
import HeaderMenu from "./headerMenu/HeaderMenu";
import { HeaderContainer } from './Header.styled';

function PublicHeader() {
    const navigation = [
        { url: paths.home.path, label: paths.home.name },
        { url: paths.home.path, label: paths.home.name },
        { url: paths.home.path, label: paths.home.name },
        { url: paths.home.path, label: paths.home.name },
        { url: paths.home.path, label: paths.home.name },

    ];

    return (
        <HeaderContainer>
            <HeaderResume />
            <HeaderMenu />
        </HeaderContainer>
    );
}

export default PublicHeader;