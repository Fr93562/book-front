import { PureComponent } from 'react';

class Error extends PureComponent {
    render() {
        const { store } = this.props;

        return (
            <>
                error
            </>
        );
    }
}

export default Error;
