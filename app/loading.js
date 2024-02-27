import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';

const LoadingCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: '4px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Box sx={{ width: '100%', mt: 1 }}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
      </Box>
    </Box>
  );
};

export default LoadingCard;
