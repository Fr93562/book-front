import { Main } from '../../common/container.styled';

function PublicMain(props) {
    const { children } = props;
    return (
        <Main>
           {children}
        </Main>
    );
}

export default PublicMain;