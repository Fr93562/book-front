import { Link } from "react-router-dom";
import theme from "../../theme";
import Navigation from "../publicNavigation/PublicNavigation";
import Icon from "../../common/Icon";
import { Header } from '../../common/container.styled';
import { TextHeader } from '../../common/contents.styled';

function PublicHeader() {

    return (
        <Header>
            <Link to="/">
                <Icon draw={theme.svgs.brand} color={theme.colors.red20} />
                <TextHeader>
                    François Macko
                </TextHeader>
            </Link>
            <Navigation />
        </Header>
    );
}

export default PublicHeader;