// src/components/ReferralSteps.js
import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const ReferralSteps = () => {
    const steps = [
        "Submit referrals easily via our website's referral section.",
        "Earn rewards once your referral joins an Accredian program.",
        "Referrer receives a bonus 30 days after program enrollment.",
    ];

    return (
        <Grid container spacing={4} justifyContent="center" sx={{ padding: '40px 0' }}>
            {steps.map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Paper elevation={2} sx={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6">{`Step ${index + 1}`}</Typography>
                        <Typography>{step}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ReferralSteps;

