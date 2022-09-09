import Header from './publicHeader/PublicHeader';

function TemplatePublic(props) {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default TemplatePublic;