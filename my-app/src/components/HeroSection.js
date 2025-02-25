// src/components/HeroSection.js
import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const HeroSection = ({ onOpenModal }) => {
    return (
        <Container sx={{ textAlign: 'center', padding: '60px 0' }}>
            <Typography variant="h3" gutterBottom>
                Let’s Learn & Earn
            </Typography>
            <Typography variant="h6" paragraph>
                Get a chance to win up to Rs. 15,000
            </Typography>
            <Button variant="contained" color="primary" onClick={onOpenModal}>
                Refer Now
            </Button>
        </Container>
    );
};

export default HeroSection;
