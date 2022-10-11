import Header from './publicHeader/PublicHeader';
import Main from './publicMain/PublicMain';
import Footer from './publicFooter/PublicFooter';

function TemplatePublic(props) {
    const { children } = props;
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default TemplatePublic;