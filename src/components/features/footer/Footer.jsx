import { FooterContainer, FooterText } from './Footer.styled';

function Footer() {
    let date = new Date();
    let copyright= `François Macko Ⓒ ${date.getFullYear()}`;

    return (
        <FooterContainer>
            <FooterText>
                {copyright}
            </FooterText>
        </FooterContainer>
    );
}

export default Footer;