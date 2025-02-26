import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Customizing the Toolbar to remove the default padding
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingLeft: theme.spacing(0),  // Removing left padding
  paddingRight: theme.spacing(0), // Removing right padding
  minHeight: 'auto', // Removing minimum height
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f8f9fa', color: '#212529', boxShadow: 'none' }}> {/* Light background, dark text, removed shadow */}
      <StyledToolbar> {/* Using the customized Toolbar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1rem 2rem' }}> 
          <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Logo and Courses container */}
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mr: 2, display: 'flex', alignItems: 'center' }}>
              <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp" alt="Accredian Logo" style={{ height: '2rem', marginRight: '0.5rem' }} /> 
            </Typography>

            {/* Courses Dropdown */}
            <Button
              id="courses-button"
              aria-controls={open ? 'courses-menu' : undefined}
              aria-haspopup={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                backgroundColor: '#007bff', 
                color: 'white', 
                textTransform: 'none', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px', 
                '&:hover': {
                  backgroundColor: '#0069d9', // Darker blue on hover
                },
                '& .MuiButton-endIcon': {
                  marginLeft: '0px', // Remove default margin for icon
                },
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Courses
            </Button>
            <Menu
              id="courses-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'courses-button',
              }}
              sx={{
                '& .MuiPaper-root': { // Style the menu paper
                  marginTop: '0.5rem', // Add some top margin
                  borderRadius: '4px', // Match button border radius
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle shadow
                },
              }}
            >
              <MenuItem onClick={handleClose}>Course 1</MenuItem>
              <MenuItem onClick={handleClose}>Course 2</MenuItem>
              {/* Add more MenuItems as needed */}
            </Menu>
          </Box>

          {/* Right Aligned Items */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Refer & Earn</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Resources</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>About Us</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Login</Button>
            <Button variant="contained" sx={{ backgroundColor: '#007bff', color: 'white', textTransform: 'none', ml: 1, borderRadius: '4px', '&:hover': { backgroundColor: '#0069d9' } }}>Try for free</Button>
          </Box>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;