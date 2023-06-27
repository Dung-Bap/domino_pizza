import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publishRoutes } from '~/routes';
import DefaultLayout from './Layout/DefaultLayout';
import Modal from './component/Modal/Modal';
import ModalMenu from './component/Modal/ModalMenu/ModalMenu';
import ModalNotification from './component/Modal/ModalNotification/ModalNotification';
import ModalAddProduct from './component/Modal/ModalAddProduct/ModalAddProduct';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else {
                            Layout = DefaultLayout;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            <Modal />
            <ModalMenu />
            <ModalNotification />
            <ModalAddProduct />
        </BrowserRouter>
    );
}

export default App;
