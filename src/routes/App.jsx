import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Projects from '../pages/Projects';
import Layout from '../containers/Layout';
// import AboutMe from '../pages/AboutMe';
// import Home from '../pages/Home';
// import NotFound from '../pages/NotFound';
import '../styles/global.scss';
// import Context from '@context/AppContext';
// import { ConstProvider } from '@context/AppContext';

const App = () => {
    return (
    // <ConstProvider>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Projects />} />                
				    {/* <Route exact path="/aboutme" element={<AboutMe />} /> */}
                    {/* <Route exact path="/projects" element={<Projects />} /> */}

                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </BrowserRouter>
    // </ConstProvider>

    );
}

export default App;
