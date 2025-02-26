import React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  backgroundColor: '#e8f0fe',
  borderRadius: '40px',
  padding: '8px',
  border: 'none',
  boxShadow: 'none',
  width: 700,
  justifyContent: 'space-around',

  '& .MuiButton-root': {
    textTransform: 'none',
    color: '#1a237e',
    fontWeight: 600,
    border: 'none',
    padding: '8px 20px', 
    fontSize: '1.1rem', 
    '&:hover': {
      backgroundColor: '#bbdefb',
      border: 'none',
    },
    '&.active': {
      color: '#0d47a1',
      background: 'none',
      borderBottom: '2px solid #0d47a1',
      borderRadius: 0,
      paddingBottom: '6px', 
    },
  },
}));

const FilterButtons = () => {
  const [activeButton, setActiveButton] = React.useState('Refer');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <StyledButtonGroup aria-label="filter buttons">
        <Button
          className={activeButton === 'Refer' ? 'active' : ''}
          onClick={() => handleButtonClick('Refer')}
        >
          Refer
        </Button>
        <Button
          className={activeButton === 'Benefits' ? 'active' : ''}
          onClick={() => handleButtonClick('Benefits')}
        >
          Benefits
        </Button>
        <Button
          className={activeButton === 'FAQs' ? 'active' : ''}
          onClick={() => handleButtonClick('FAQs')}
        >
          FAQs
        </Button>
        <Button
          className={activeButton === 'Support' ? 'active' : ''}
          onClick={() => handleButtonClick('Support')}
        >
          Support
        </Button>
      </StyledButtonGroup>
    </Box>
  );
};

export default FilterButtons;