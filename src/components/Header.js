import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, minHeight: 'none' }}>
      <Toolbar>
        <Typography variant="" noWrap component="div">
          <h3>TMS</h3>

        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 18, textAlign: 'center' }}>
          JSW  
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
          Profile  
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


