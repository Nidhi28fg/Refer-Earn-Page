import React from 'react';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import unlockImage from '../photo/unlock.png';



function HeroSection({ onOpenModal }) {
    return (
        <Container maxWidth="lg" sx={{
            my: 1,
            bgcolor: '#eef5ff',
        }}>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                    <Box sx={{ maxWidth: 500, ml: 6 }}>
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, color: '#212529', fontSize: '5rem' }}>
                            Let's Learn
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, color: '#212529', fontSize: '5rem' }}>
                            & Earn
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 4, color: '#212529', fontSize: '3rem' }}>
                            Get a chance to win up-to
                            <Typography variant="inherit" component="span" sx={{ fontWeight: 'bold', color: '#007bff', fontSize: '3.5rem' }}> Rs 15,000</Typography>
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
                                py: 1.5,
                                px: 3,
                                fontSize: '1.1rem',
                                textTransform: 'none',
                                marginRight: '10px'
                            }}
                        >
                            Refer Now
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            sx={{
                                color: '#007bff',
                                borderColor: '#007bff',
                                '&:hover': {
                                    borderColor: '#0069d9',
                                    color: '#0069d9'
                                },
                                borderRadius: '5px',
                                py: 1.5,
                                px: 3,
                                fontSize: '1.1rem',
                                textTransform: 'none'
                            }}
                        >
                            Explore
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={unlockImage}
                            style={{ Width: '50%', height: 'auto' }} // Responsive image
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeroSection;