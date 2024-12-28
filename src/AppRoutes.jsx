    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Layout from './components/layout/Layout';
    import Homepage from './pages/home/Homepage.jsx';
    import { AppProvider } from './AppContext';
    import PayementPage from './pages/payment/PayementPage.jsx';

    const AppRoutes = () => {
        return (
            <AppProvider>
                <Router>
                    <Routes>
                        {/* Routes that use the Layout */}
                        <Route path="/" element={<Layout><Homepage /></Layout>} />
                        <Route path="/:lang" element={<Layout><Homepage /></Layout>} />

                        {/* Route for Payment Page without Layout */}
                        <Route path="/payment" element={<PayementPage />} />
                    </Routes>
                </Router>
            </AppProvider>
        );
    };

    export default AppRoutes;
//    scp -r /c/Projects/agent-shop/build root@185.164.111.36:/var/www/global-melbet.org

    // ssh root@185.164.111.36
    // |8mAig=WWu/yEJ7N@jwa