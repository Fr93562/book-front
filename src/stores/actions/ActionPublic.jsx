import request from "../../utils/Request";

class ActionPublic {
    getUser(store) {
        const updateState = (data) => { store.setState({ users: data })};
        request.get('/user', updateState);
    }

    getProject(store) {
        const updateState = (data) => { store.setState({ projects: data })};
        request.get('/project', updateState);
    }

    getSide(store) {
        const updateState = (data) => { store.setState({ sides: data })};
        request.get('/side', updateState);
    }
}

export default new ActionPublic();