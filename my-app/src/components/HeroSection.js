import React from 'react';
import { Button, Typography, Container, Box, Grid } from '@mui/material';

const HeroSection = ({ onOpenModal }) => {
    return (
        <Container maxWidth="lg" sx={{ 
            py: 10, // Consistent vertical padding
            backgroundColor: '#f8f9fa' // Light gray background from image
         }}>
            <Grid container spacing={2} alignItems="center"> {/* Grid for side-by-side layout */}
                <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}> {/* Text on the left */}
                    <Box sx={{ maxWidth: 400 }}> {/* Limit text width for better readability */}
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, color: '#212529', display: 'flex', alignItems: 'center' }}>
                            Let's Learn 
                            <Typography 
                                variant="h3" 
                                component="span" 
                                sx={{ 
                                    color: '#007bff', 
                                    fontWeight: 900, 
                                    fontFamily: 'Arial Black', // Or similar bold font
                                    mx: 1 
                                }}
                            >
                                &amp;
                            </Typography>
                            Earn
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4, color: '#212529' }}> {/* Use body1 for regular text */}
                            Get a chance to win up-to <Typography variant="inherit" component="span" sx={{ fontWeight: 'bold' }}>Rs. 15,000</Typography>
                        </Typography>

                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={onOpenModal} 
                            sx={{ 
                                bgcolor: '#007bff',  
                                color: 'white',       
                                '&:hover': {
                                    bgcolor: '#0069d9' 
                                },
                                borderRadius: '5px',   
                                py: 1.2, // Adjust vertical padding for button height
                                px: 2.5, // Adjust horizontal padding for button width
                                fontSize: '1rem',      
                                textTransform: 'none' 
                             }}
                        >
                            Refer Now
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}> 
                    <Box sx={{ width: '100%', maxWidth: 400, height: 300, backgroundColor: '#ced4da' }}> 
                        <Typography variant="h6" color="gray" align="center" sx={{ lineHeight: '300px' }}>image</Typography> 
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeroSection;