import React from 'react';
import { Grid, Button } from '@mui/material';

const LoadMoreButton = ({ onLoadMoreClick }) => (
  <Grid container justifyContent="center" sx={{ py:3 }}>
    <Grid item>
      <Button variant="contained" color="primary" onClick={onLoadMoreClick}>
        Load more articles
      </Button>
    </Grid>
  </Grid>
);

export default LoadMoreButton;
