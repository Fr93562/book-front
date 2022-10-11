import { Footer, HorizontalList, HorizontaLItem } from '../../common/container.styled';
import { Important } from '../../common/contents.styled';

function HomePresentation() {
    let date = new Date();
    let copyright= `François Macko Ⓒ ${date.getFullYear()}`;
    let links = [
        { name: 'link1', url: 'www.google.fr', type: '_self' },
        { name: 'link2', url: 'www.google.fr', type: '_self' },
        { name: 'link3', url: 'www.google.fr', type: '_self' },
    ];

    return (
        <Footer>
            <Important>
                {copyright}
            </Important>
            <HorizontalList>
                {links.map((link, index) =>
                    <HorizontaLItem key={index} >{link.name}</HorizontaLItem>
                )}
            </HorizontalList>
        </Footer>
    );
}

export default HomePresentation;