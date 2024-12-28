import { Box } from '@mui/material';
import React, { useState } from 'react';
import PaymentNavbar from './PaymentNavbar';
import SelectTabs from './Tabs';
import DepositForm from './DepositForm';
import './PaymentPage.css'

const PaymentPage = () => {
  const [reveal, setReveal] = useState(false);
  const [isCryptoTab, setIsCryptoTab] = useState(true);

  const handleCryptoTab = (isCrypto) => {
    setIsCryptoTab(isCrypto);
  };

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <PaymentNavbar />
      {/* <Box component={'h1'}>Crypto Top-up</Box> */}
      <Box
  style={{
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    position: 'relative',
    marginTop:'0.5em',
    color:'#FEBD02'
  }}
>
  <Box
    style={{
      display: 'inline-block',
      animation: 'slide-continuous 40s linear infinite',
      willChange: 'transform',
    }}
  >
    <b>Caution:</b> Deposited funds are only used for crediting agent accounts and cannot be used for placing bets. These addresses are intended exclusively for agent deposits in your Player Account.
  </Box>
</Box>
      <Box
        textAlign={'center'}
        onClick={() => setReveal(!reveal)}
        sx={{ cursor: 'pointer', textDecoration: 'underline' }}
        component={'h5'}
        color='blue'
      >
        Click To Reveal Wallets
      </Box>
      {reveal && isCryptoTab && (
        <>
          <SelectTabs onCryptoTab={handleCryptoTab} />
          <DepositForm />
        </>
      )}
      {!reveal && <DepositForm />}
    </Box>
  );
};

export default PaymentPage;
