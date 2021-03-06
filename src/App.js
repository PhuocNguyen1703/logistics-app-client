import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((routes, index) => {
                        const Page = routes.component;

                        let Layout = DefaultLayout;

                        if (routes.layout) {
                            Layout = routes.layout;
                        }
                        if (routes.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={routes.path}
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
        </Router>
    );
}

export default App;
