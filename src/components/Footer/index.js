import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      role="footer"
      component="footer"
      mt={8}
      py={3}
      bgcolor="primary.main"
      color="white"
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} Hacker News
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
