import { PureComponent } from 'react';
import TemplatePublic from '../../components/global/templatePublic/TemplatePublic';

class Home extends PureComponent {
    render() {
        const { store } = this.props;

        return (
            <TemplatePublic>
                home
            </TemplatePublic>
        );
    }
}

export default Home;