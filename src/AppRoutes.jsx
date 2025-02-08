    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Layout from './components/layout/Layout';
    import Homepage from './pages/home/Homepage.jsx';
    import { AppProvider } from './AppContext';
    import PayementPage from './pages/payment/PayementPage.jsx';
import { Box, Typography } from '@mui/material';

    const AppRoutes = () => {
        return (
            <AppProvider>
                <Router>
                    <Routes>
                         
                         <Route path="/" element={<Layout><Homepage /></Layout>} />
                        <Route path="/:lang" element={<Layout><Homepage /></Layout>} /> 
                        



                        {/* Route for Payment Page without Layout */}
                        <Route path="/agent-login" element={<PayementPage />} />
                    </Routes>
                </Router>
            </AppProvider>
        );
    };

    export default AppRoutes;

    // melbetagent.com our website 
    //github repo is lemagent
