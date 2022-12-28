import { PureComponent } from 'react';
import Header from '../../../components/features/header/Header';
import Footer from '../../../components/features/footer/Footer';


class Home extends PureComponent {
    render() {
        const { store } = this.props;

        return (
            <>
                <Header />
                home
                <Footer />
            </>

        );
    }
}

export default Home;