// src/components/ReferralModal.js
import React, { useState } from 'react';
import { Modal, Button, TextField, Typography } from '@mui/material';

const ReferralModal = ({ open, onClose }) => {
    const [referrerName, setReferrerName] = useState('');
    const [referrerEmail, setReferrerEmail] = useState('');
    const [refereeName, setRefereeName] = useState('');
    const [refereeEmail, setRefereeEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and handle form submission
        if (referrerName && referrerEmail && refereeName && refereeEmail) {
            alert('Referral submitted!');
            onClose();
        } else {
            alert('Please fill all fields!');
        }
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h6">Referral Form</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="normal"
                        value={referrerName}
                        onChange={(e) => setReferrerName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Your Email"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={referrerEmail}
                        onChange={(e) => setReferrerEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Referee Name"
                        fullWidth
                        margin="normal"
                        value={refereeName}
                        onChange={(e) => setRefereeName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Referee Email"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={refereeEmail}
                        onChange={(e) => setRefereeEmail(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default ReferralModal;
