import { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from '../configs/paths';
import Home from './public/home/Home';
import Projects from './public/project/Projects';
import Sides from './public/side/Sides';
import Contact from './public/contact/Contact';
import Error from './public/error/Error';

class Page extends PureComponent {
    isAuth() {
        const { auth, login } = this.props.store;
        const isAuth = auth && login;

        return isAuth;
    }

    render() {
        const { store } = this.props;
        const isAuth = this.isAuth();

        return (
            <BrowserRouter>
                <Routes>
                    {isAuth && (
                        <>
                            je suis connecté
                        </>
                    )}

                    <Route path={paths.home.path} element={<Home store={store} />} />
                    <Route path={paths.projects.path} element={<Projects store={store} />} />
                    <Route path={paths.articles.path} element={<Sides store={store} />} />
                    <Route path={paths.contact.path} element={<Contact store={store} />} />
                    <Route path='"/*' element={<Error store={store} />} />

                </Routes>
            </BrowserRouter>
        );
    }
}

export default Page;
