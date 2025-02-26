import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#e3f2fd', 
  padding: theme.spacing(2), 
  textAlign: 'center', 
  paddingTop: '20px', // Add top padding
  paddingBottom: '20px', // Add bottom padding

}));

const TopBanner = () => {
  return (
    <StyledBox>
      <Typography variant="body1" sx={{ color: '#262626', fontWeight: 600 }}> {/* Darker blue text color */}
        Navigate your ideal career path with tailored expert advice.{"    "}
        <Link href="#" underline="none" sx={{ color: '#5094ed', fontWeight: 600, ml: 3 }}> {/* Slightly different blue for link */}
          Contact Expert
        </Link>
      </Typography>
    </StyledBox>
  );
};

export default TopBanner;