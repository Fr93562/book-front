import React, { PureComponent } from 'react';
import ActionPublic from './actions/ActionPublic';

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
        const { children } = this.props;
        const store = this.state;

        console.log('my states', this.state);

        return (
            <>
                {React.cloneElement(children, {store})}
            </>
        );
    }
}

export default Store;