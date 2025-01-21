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
                        {/* Routes that use the Layout */}
                        {/* <Route path="/" element={<Layout><Homepage /></Layout>} />
                        <Route path="/:lang" element={<Layout><Homepage /></Layout>} /> */}
                        <Route path='/' element ={<Box><Typography variant='h4' marginTop={'1em'} textAlign={'center'} color='danger'>This page is under maintanance </Typography>
                        <Typography variant='h4' textAlign={'center'}>Contact Us Via </Typography>
                        <Typography variant='h6' textAlign={'center'}>manager@melbetagent.com </Typography> <br />
                        <Typography variant='h6' textAlign={'center'}>team@melbetagent.com </Typography></Box>}/>



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