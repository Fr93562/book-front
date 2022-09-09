import { PureComponent } from 'react';
import ActionPublic from './action/ActionPublic';
import Page from './pages/Router';

class Store extends PureComponent {
    constructor() {
        super();

        this.state = {
            auth: false,
            configurations: {},
            users: {},
            projects: {},
            sides: {},
            login: {},
            stat: {},
            contact: {},
        }
    }
    componentDidMount() {
        this.getPublicData();
    }

    getPublicData() {
        let component = this;

        ActionPublic.getUser(component);
        ActionPublic.getSide(component);
        ActionPublic.getProject(component);
    }

    getPrivateData() {

    }

    getAuth() {

    }

    render() {
        const store = this.state;
        console.log('my states', this.state);

        return (
            <Page store={store} />
        );
    }
}

export default Store;