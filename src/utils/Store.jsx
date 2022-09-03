import { PureComponent } from 'react';
import Request from '../utils/Request';

class Store extends PureComponent {
    constructor() {
        super();

        this.state = {
            auth: false,
            publicData: {
                user: {},
                projects: {},
                sides: {},
                contact: {},
            },
            privateData: {
                login: {},
                stat: {},
            },
        }
    }
    componentDidMount() {

    }

    getPublicData() {

    }

    getPrivateData() {

    }

    test() {
        const test = () => { console.log('test')};
        
        Request.get('/project', test);
    }

    getAuth() {

    }

    render() {
        this.test();
        return 'my store';
    }
}

export default Store;