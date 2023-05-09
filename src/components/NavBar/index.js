import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import logo from '../../logo.png';

const NavBar = () => {
  return (
    <AppBar role='navigation' position="static">
      <Toolbar>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: 25,
          height: 25,
          border: '2px solid white',
          mr: 2,
        }}
      />
        <Typography variant="h5">
          Hacker News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
