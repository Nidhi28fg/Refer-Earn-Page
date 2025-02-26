import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Container sx={{ padding: '40px 0' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Contact Us</Typography>
                    <Typography>Email: admissions@accredian.com</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Follow Us</Typography>
                    <Typography>Facebook | Twitter | LinkedIn</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
